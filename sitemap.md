---
layout: base
exclude: true
---
<script type="text/javascript" src="http://blog.innocellence.com/shared/ghost-url.min.js"></script>
<script type="text/javascript">
ghost.init({
  clientId: "ghost-frontend",
  clientSecret: "6f29fb3126df"
});
function onSuccess(data) {
  var $result = $('#blog-posts');
  $.each(data.posts, function (i, post) {
    var truncateTitle = post.title.substring(0,130);
    var blog = 'http://blog.innocellence.com' +post.url;
    $result.append(
        '<li><a href="'+blog+'">'+truncateTitle+'</a></li>'
    );
  });
}

/* Get Posts */
jQuery(document).ready(function () {
  $.get(
    ghost.url.api('posts', {
      limit: "all"
    })
  ).done(onSuccess);
});
</script>

<section>
  <div class="container">
    <h2>Sitemap</h2>
    <p>View this page in <a href="{{ site.baseurl }}/sitemap.xml"><code>.xml</code></a> format.</p>
    <hr>
    <div class="col-l5">
    <h3>English</h3>
    <hr>
      <div class="innocellence">
        {% for menu in site.data.en-sitemap.topnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
            {% if menuitem.url contains 'blog' %}
            <li><a href="{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
            {% else %}
            <li><a href="{{site.baseurl}}{{ menuitem.url | replace:'index.html','' | replace:'.html','' }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
            {% endif %}
          {% endfor %}
        </ul>
        {% endfor %}
    </div>    
      <hr>
      <div class="solutions">
        {% for menu in site.data.en-sitemap.subnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
      <hr>
      <div class="legal">
        {% for menu in site.data.en-sitemap.corporate %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
          <li><a href="{{site.baseurl}}/sitemap.html" title="Sitemap">Sitemap</a></li>
        </ul>
        {% endfor %}
      </div>
    </div>
    <div class="col-l5 shift-l1">
      <h3>中文</h3>
      <hr>
      <div class="innocellence">
        {% for menu in site.data.cn-sitemap.topnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
            {% if menuitem.url contains 'blog' %}
            <li><a href="{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
            {% else %}
            <li><a href="{{site.baseurl}}{{ menuitem.url | replace:'index.html','' | replace:'.html','' }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
            {% endif %}
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
      <hr>
      <div class="solutions">
        {% for menu in site.data.cn-sitemap.subnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
      <hr>
      <div class="legal">
        {% for menu in site.data.cn-sitemap.corporate %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
          <li><a href="{{site.baseurl}}/sitemap.xml" target="_blank" title="Sitemap">站点地图</a></li>
        </ul>
        {% endfor %}
      </div>
    </div>
    <div class="col-l10">
      <hr> 
      <h3>Blog Posts</h3>
      <ul id="blog-posts"></ul>
    </div>
  </div>
</section>
