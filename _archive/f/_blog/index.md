---
title: The Blog
category: blog
lang: en
exclude: true
---
<section class="cards">
  <div class="heading">
    <h2>{{ page.title }}</h2>
  </div>
  <ul class="masonry-grid card-list">
  <li class="card-sizer"></li>
  {% for post in site.posts %}
  <li class="card-item" lang="{{ post.lang }}">
    <div class="card">
      <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">
        <img class="image" src="{{ post.image }}">
        <div class="content">
          <h3 class="title">{{ post.title | truncate: 120 }}</h3>
          <time datetime="{{ post.date }}">{{ post.date | date: "%-d %B %Y" }}</time>
          <p>{{ post.content | strip_html | strip_newlines | truncate: 110 }}</p>
        </div>
      </a>
      <ul class="tags">
        {% for tag in post.tags %}
          <li class="feed-tag">
            <a href="{{ site.baseurl }}/blog/tag.html">{{ tag }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </li>
  {% endfor %}
  </ul>
</section>
