// import type { LinksFunction } from "@remix-run/node";

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: "stylesheet",
//       href: "app/components/Foxes/foxes.css",
//     },
//   ];
// };

export default function FoxLogo() {
  return (
    <svg
      className="fox-logo"
      role="img"
      width="50"
      height="50"
      viewBox="0 0 243.08 221.34"
    >
      <g>
        <path
          width="100%"
          height="100%"
          d="m241.23 109.07-22.47-18.35 4.44-82.69c.39-7.24-8.61-10.86-13.34-5.38l-63.08 73.01c-6.63 1.15-14.99 2.03-25.23 2.03s-18.61-.88-25.24-2.03L33.23 2.65C28.49-2.83 19.5.79 19.89 8.03l4.44 82.69-22.48 18.35c-3.08 2.52-2.17 7.45 1.62 8.69l20.49 6.73-13.99 15.1c-2.75 2.96-1.06 7.79 2.93 8.41l23.04 3.53-7.18 11.4c-2.13 3.38.34 7.78 4.33 7.72l22.93-.31-2.72 8.16c-1.21 3.61 1.88 7.21 5.63 6.56l26.44-4.56c-1.88-5.42-4.14-10.77-9.37-16.87-.74-.87.43-2.04 1.31-1.31 14.02 11.68 19.41 39.9 26.23 51.3l1.02 1.51c.13.18.26.4.39.57v.01c2.92 3.75 7.21 5.63 11.5 5.63h10.13c4.3 0 8.6-1.88 11.51-5.64l1.42-2.11c6.81-11.41 12.21-39.61 26.22-51.28.88-.73 2.05.44 1.31 1.31-5.23 6.1-7.49 11.45-9.37 16.87l26.44 4.56c3.75.65 6.84-2.95 5.63-6.56l-2.73-8.16 22.93.31c4 .05 6.46-4.34 4.33-7.72l-7.18-11.4 23.04-3.53c3.99-.61 5.68-5.44 2.93-8.41l-13.99-15.1 20.49-6.73c3.78-1.24 4.7-6.17 1.62-8.69zM54.8 77.41c-4.26.9-7.48 2.08-11.79 4.22-1.59.79-3.49-.24-3.66-2.01l-2.8-28.86c-.26-2.66 3.25-3.85 4.67-1.59l15.24 24.42c.93 1.49.07 3.45-1.65 3.81zm36.23 57.86h-7.14c-3.94 0-7.14-3.2-7.14-7.14s3.2-7.14 7.14-7.14 7.14 3.2 7.14 7.14zm40.35 62.36-4.75 7.2c-1.38 1.78-3.55 2.46-5.09 2.46s-3.71-.68-5.09-2.46l-4.75-7.2c-1.3-1.67-.11-4.11 2.01-4.11h15.64c2.12 0 3.31 2.44 2.01 4.11zm27.81-62.36h-7.14v-7.14c0-3.94 3.2-7.14 7.14-7.14s7.14 3.2 7.14 7.14-3.2 7.14-7.14 7.14zm44.54-55.65c-.17 1.76-2.08 2.79-3.66 2.01-4.31-2.14-7.53-3.31-11.79-4.22-1.72-.36-2.58-2.32-1.65-3.81l15.24-24.42c1.42-2.27 4.93-1.08 4.67 1.59l-2.8 28.86z"
        />
        <path d="M158.9 123.85c-.84.84 3.73 5.42 4.57 4.57s.5-2.55-.76-3.81-2.97-1.6-3.81-.76zM83.6 123.85c-.84.84 3.73 5.42 4.57 4.57s.5-2.55-.76-3.81-2.97-1.6-3.81-.76z" />
        <g className="blink">
          <rect x="75.9" y="120" width="93.2" height="8.6" />
          <rect x="75.9" y="133.5" width="93.2" height="5.6" />
        </g>
      </g>
    </svg>
  );
}