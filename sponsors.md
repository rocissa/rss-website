---
title: Sponsors
layout: page
---
<hr>
<div class="block-text">
<p>Our sponsors are not only critical to the success of the Rochester Security Summit, they are our partners. The Rochester Security Summit encourages attendees to visit our sponsor booths not just to gather swag and sign up for the chance to win prizes, but to expand your knowledge and develop new partnerships.</p>

*Navigate the sponsor list below for more information on each sponsor*
</div>
<hr>
{%- assign active_year = site.current_year -%}
{%- assign level_heading = 'h2' -%}
{%- if site.sponsors_ready_to_display -%}
{%- assign numberSponsors = sponsors | size -%}
{%- if numberSponsors > 0 -%}
  <div class="row sponsors">
    {%- assign sponsor_level = "" -%}
	{%- for sponsor in sponsors -%}
      {%- if sponsor_level != sponsor.Level -%}
        {%- assign sponsor_level = sponsor.Level -%}
        <div class="sponsor-class text-center">
          <{{ level_heading }}>{{ sponsor_level }}</{{ level_heading }}>
        </div>
      {%- endif -%}
      <div class="sponsor-grid sponsor sponsor-{{ sponsor.Level | downcase }}"><a href="{{ sponsor.Link }}" target="_blank"><img src="/{{ active_year }}/sponsors/{{ sponsor.Image }}" alt="{{ sponsor.Name }}"/></a>
	  <br><p><b>{{ sponsor.Name }}</b></p>
	  {%- if sponsor_level != "Partners" -%}
	  <p><em>Visit us at Booth {{ sponsor.Booth }}</em></p>
	  {%- else -%}
	  <p><em>Visit our table near the entrance</em></p>
	  {%- endif -%}
	  </div>
    {%- endfor -%}
  </div>
{%- else -%}
<h2 class="center">The RSS:{{ site.current_year }} sponsor list is not yet available</h2>
{%- endif -%}
{%- else -%}
<h2 class="center">The RSS:{{ site.current_year }} sponsor list is not yet available</h2>
{%- endif -%}
