---
title: Past Events
layout: page
---
<div class="past-events-block">
{%- for conf in collections.conferences reversed -%}
    {%- if site.current_year != conf.data.year -%}
        {%- assign active_year = conf.data.year -%}
        <section class="past-event-card"><a href="/{{ conf.data.year }}">
          <img src="/images/rss-logo.png" alt="Rochester Security Summit logo">
          <h1>RSS:{{ conf.data.year }}</h1>
          {%- if conf.data.theme -%}<h2>{{ conf.data.theme }}</h2>{%- endif -%}
        </a></section>
     {%- endif -%}
 {% endfor %}
</div>