---
layout: base
exclude: true
redirect_from:
  - /d/sitemap.html
  - /sitemap.html
---
<section>
  <div class="container">
    <h2>Sitemap</h2>
    <p>View this page in <a href="{{ site.baseurl }}/sitemap.xml" target="_blank"><code>.xml</code></a> format.</p>
    <hr>
    <div class="col-l5">
      <h3>English</h3>
      <hr>
      <div>
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
      <div>
        {% for menu in site.data.en-sitemap.capability_subnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
      <hr>
      <div>
        {% for menu in site.data.en-sitemap.about_subnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
      <hr>
      <div>
        {% for menu in site.data.en-sitemap.corporate %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
          <li><a href="{{site.baseurl}}/sitemap/" title="Sitemap">Sitemap</a></li>
        </ul>
        {% endfor %}
      </div>
    </div>
    <div class="col-l5 shift-l1">
      <h3>中文</h3>
      <hr>
      <div>
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
      <div>
        {% for menu in site.data.cn-sitemap.capability_subnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
      <hr>
      <div>
        {% for menu in site.data.cn-sitemap.about_subnav %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
      <hr>
      <div>
        {% for menu in site.data.cn-sitemap.corporate %}
        <h4>{{menu.title}}</h4>
        <ul>
          {% for menuitem in menu.menuitems %}
          <li><a href="{{site.baseurl}}{{ menuitem.url }}" title="{{ menuitem.title }}">{{ menuitem.title }}</a></li>
          {% endfor %}
          <li><a href="{{site.baseurl}}/sitemap/" title="站点地图">站点地图</a></li>
        </ul>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
