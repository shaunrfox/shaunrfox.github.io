---
layout: default
page-title: "Some things should be documented."
---

<section class="writing-list-wrapper">
	<div class="container">
			{% for post in site.categories.writing %}
				<a href="{{ post.url }}" class="column writing-post {% if forloop.first %}first{% endif %}">
					<div class="writing-home-image" style="background-image:url('/assets/img/writing/{{ post.home_image }}')"></div>
					<h2>{{ post.title }}</h2>
					<p class="meta">{{ post.date | date_to_string }}</p>
					<div class="excerpt">{{ post.excerpt }}</div>
				</a>
			{% endfor %}
	</div>
</section>
