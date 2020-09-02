---
title: Rochester Security Summit
layout: default
---
{% if site.show_sponsors %}
  {% if site.homepage_sponsors_year != site.current_year %}
## {{ site.homepage_sponsors_year }} Sponsors
  {% else %}
## Sponsors
  {% endif %} 
  
  {% assign currentSponsors = site.data.sponsors | where: "Year", site.homepage_sponsors_year %}
  {% assign sponsor_level = "" %}
  {% for sponsor in currentSponsors %}
    {% if sponsor_level != sponsor.Level %}
       {% assign sponsor_level = sponsor.Level %}

<h3>{{ sponsor_level }}</h3>
    {% endif %}      

<div class="sponsor sponsor-{{ sponsor.Level | downcase }}"><a href="{{ sponsor.Link }}"><img src="{{ site.homepage_sponsors_year }}/sponsors/{{ sponsor.Image }}" alt="{{ sponsor.Name }}" /></a></div>

  {% endfor %}
{% endif %}