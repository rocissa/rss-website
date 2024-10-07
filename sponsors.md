---
title: Sponsors
layout: page
---
<hr>
<div class="block-text">
<p>Our sponsors are not only critical to the success of the Rochester Security Summit, they are our partners. The Rochester Security Summit encourages attendees to visit our sponsor booths not just to gather swag and sign up for the chance to win prizes, but to expand your knowledge and develop new partnerships.</p>

*Navigate the sponsor list below for more information on each sponsor*
</div>
{%- assign active_year = site.current_year -%}
{%- if site.sponsors_ready_to_display -%}
{%- assign numberSponsors = sponsors | size -%}
{%- if numberSponsors > 0 -%}
  <div class="row sponsors">
    {%- assign sponsor_level = "" -%}
	{%- for sponsor in sponsors -%}
	  {%- assign sponsor_name = sponsor.Name -%}
      {%- if sponsor_level != sponsor.Level -%}
      {%- assign sponsor_level = sponsor.Level -%}
	  <hr>
      {%- endif -%}
      <div class="sponsor-grid sponsor sponsor-{{ sponsor.Level | downcase }}"><a href="{{ sponsor.Link }}" target="_blank"><img src="/{{ active_year }}/sponsors/{{ sponsor.Image }}" alt="{{ sponsor.Name }}"/></a>
	    <div class="mytooltip">
	    <div class="mytooltiptext">{{ sponsor.Description }}</div>
	    <br><p><b>{{ sponsor.Level | upcase }}</b></p><br>
	    {%- if sponsor_level != "Partners" -%}
	    <p><em>Visit us at Booth {{ sponsor.Booth }}</em></p>
	    {%- else -%}
	    <p><em>Visit our table near the entrance</em></p>
	    {%- endif -%}
	    <p><em>{{ booth_text }}</em></p>
	    {%- if site.sponsors_show_talks -%}
	      {%- assign numTalks = sponsor.Talks -%}
	      {%- if numTalks > 0 -%}
	        <div class="sponsor-talk">
	         <p>Talks by {{ sponsor.Name }}:</p>
	          {%- for talk in sponsorTalks -%}
	            {%- if sponsor_name == talk.Name -%}
	              <p><a href="{{ talk.URL }}">{{ talk.Title }}</a></p>
	            {%- endif -%}
	          {%- endfor -%}
		    </div>
	      {%- endif -%}
	    {%- endif -%}
	    </div>
	  </div>
    {%- endfor -%}
  </div>
{%- else -%}
<h2 class="center">The RSS:{{ site.current_year }} sponsor list is not yet available</h2>
{%- endif -%}
{%- else -%}
<h2 class="center">The RSS:{{ site.current_year }} sponsor list is not yet available</h2>
{%- endif -%}
