import { useMemo, useState } from "react";
import { useLoaderData, type MetaFunction } from "@remix-run/react";
import Rule from "../components/Rule";

type Book = {
  id: string;
  title: string;
  subtitle: string | null;
  author: string[];
  series: string | null;
  seriesNumber: number | null;
  genre: string[];
  status: "reading" | "finished" | null;
  year: string | null;
  cover: string | null;
};

export const meta: MetaFunction = () => {
  // noindex until the page is launched and linked from the nav
  return [{ title: "Shaun Fox | Library" }, { name: "robots", content: "noindex" }];
};

export const clientLoader = async () => {
  const res = await fetch("/library/library.json");
  const data: { books: Book[] } = await res.json();
  return data.books;
};

// On small screens only the most common genres show until "More genres" is pressed.
const GENRES_COLLAPSED = 8;

const SORTS = [
  { key: "title", label: "Title" },
  { key: "author", label: "Author" },
];

const sortTitle = (t: string) => t.replace(/^(the|a|an)\s+/i, "");
const lastName = (b: Book) => (b.author[0] || "").split(" ").slice(-1)[0];

// Every cover gets the same 2:3 box and keeps its own shape inside it, anchored bottom-left.
function Cover({ book }: { book: Book }) {
  return (
    <div className="book-cover-box">
      {book.cover ? (
        <img className="book-cover" src={`/library/${book.cover}`} alt="" loading="lazy" />
      ) : (
        <div className="book-cover book-cover--blank" aria-hidden="true">
          <span>{book.title}</span>
        </div>
      )}
    </div>
  );
}

function BookCard({
  book,
  showNumber,
  onGenre,
}: {
  book: Book;
  showNumber?: boolean;
  onGenre?: (genre: string) => void;
}) {
  return (
    <li className="book">
      <Cover book={book} />
      <div className="book-meta">
        {showNumber && book.seriesNumber != null && (
          <span className="book-number">#{book.seriesNumber}</span>
        )}
        <span className="book-title">{book.title}</span>
        <span className="book-author">{book.author.join(", ")}</span>
        {onGenre && book.genre.length > 0 && (
          <span className="book-genres">
            {book.genre.slice(0, 2).map((g) => (
              <button key={g} onClick={() => onGenre(g)}>
                {g}
              </button>
            ))}
          </span>
        )}
      </div>
    </li>
  );
}

export default function LibraryRoute() {
  const books = useLoaderData<typeof clientLoader>();
  const [view, setView] = useState<"shelf" | "series">("shelf");
  const [genre, setGenre] = useState<string | null>(null);
  const [sort, setSort] = useState("title");
  const [query, setQuery] = useState("");
  const [allGenres, setAllGenres] = useState(false);

  const reading = books.filter((b) => b.status === "reading");

  // Genres ordered by how many books carry them, so the common ones lead.
  const genres = useMemo(() => {
    const counts = new Map<string, number>();
    books.forEach((b) => b.genre.forEach((g) => counts.set(g, (counts.get(g) || 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [books]);

  const seriesCount = new Set(books.filter((b) => b.series).map((b) => b.series)).size;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books
      .filter((b) => !genre || b.genre.includes(genre))
      .filter(
        (b) =>
          !q ||
          b.title.toLowerCase().includes(q) ||
          b.author.join(" ").toLowerCase().includes(q) ||
          (b.series || "").toLowerCase().includes(q)
      )
      .sort((a, b) =>
        sort === "author"
          ? lastName(a).localeCompare(lastName(b)) ||
            sortTitle(a.title).localeCompare(sortTitle(b.title))
          : sortTitle(a.title).localeCompare(sortTitle(b.title))
      );
  }, [books, genre, sort, query]);

  const series = useMemo(() => {
    const groups = new Map<string, Book[]>();
    visible
      .filter((b) => b.series)
      .forEach((b) => groups.set(b.series!, [...(groups.get(b.series!) || []), b]));
    return [...groups.entries()]
      .filter(([, list]) => list.length > 1)
      .map(
        ([name, list]) =>
          [
            name,
            list.sort((a, b) => (a.seriesNumber ?? 999) - (b.seriesNumber ?? 999)),
          ] as const
      )
      .sort((a, b) => sortTitle(a[0]).localeCompare(sortTitle(b[0])));
  }, [visible]);

  return (
    <div className="library-container">
      <div className="callout">
        <p>
          Everything I&rsquo;ve read, am reading, or mean to read.
        </p>
        <p className="library-stats">
          {books.length} books &middot; {seriesCount} series &middot;{" "}
          {genres.length} genres
        </p>
      </div>

      {reading.length > 0 && (
        <section className="library-section">
          <h2>Reading now</h2>
          <ul className="book-row">
            {reading.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </ul>
        </section>
      )}

      <Rule />

      <section className="library-section">
        <div className="library-controls">
          <div className="library-tabs" role="tablist" aria-label="View">
            {(["shelf", "series"] as const).map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={view === v}
                onClick={() => setView(v)}
              >
                {v === "shelf" ? "Shelf" : "Series"}
              </button>
            ))}
          </div>
          <input
            className="library-search"
            type="search"
            placeholder="Search title, author, series"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search the library"
          />
          <div
            className={`chip-group genre-chips${allGenres ? " expanded" : ""}`}
            aria-label="Genre"
          >
            <button aria-pressed={genre === null} onClick={() => setGenre(null)}>
              All
            </button>
            {genres.map(([g, n], i) => (
              <button
                key={g}
                className={i >= GENRES_COLLAPSED && genre !== g ? "extra" : undefined}
                aria-pressed={genre === g}
                onClick={() => setGenre(g)}
              >
                {g} <span>{n}</span>
              </button>
            ))}
            {genres.length > GENRES_COLLAPSED && (
              <button className="genre-more" onClick={() => setAllGenres(!allGenres)}>
                {allGenres ? "Fewer genres" : `More genres (${genres.length - GENRES_COLLAPSED})`}
              </button>
            )}
          </div>
          {view === "shelf" && (
            <div className="chip-group" aria-label="Sort">
              <span className="chip-label">Sort</span>
              {SORTS.map((s) => (
                <button
                  key={s.key}
                  aria-pressed={sort === s.key}
                  onClick={() => setSort(s.key)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {view === "shelf" ? (
          <>
            <p className="library-count">
              {visible.length} {visible.length === 1 ? "book" : "books"}
              {genre && <> in {genre}</>}
            </p>
            <ul className="book-grid">
              {visible.map((b) => (
                <BookCard key={b.id} book={b} onGenre={setGenre} />
              ))}
            </ul>
          </>
        ) : (
          <div className="series-list">
            {series.map(([name, list]) => (
              <div className="series" key={name}>
                <h3>
                  {name} <span>{list.length}</span>
                </h3>
                <ul className="book-grid">
                  {list.map((b) => (
                    <BookCard key={b.id} book={b} showNumber />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
