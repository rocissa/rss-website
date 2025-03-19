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
      <div class="sponsor sponsor-{{ sponsor.Level | downcase }}"><a href="{{ sponsor.Link }}" target="_blank"><img src="/{{ active_year }}/sponsors/{{ sponsor.Image }}" alt="{{ sponsor.Name }}" /></a></div>
    {%- endfor -%}
  </div>
{%- else -%}
<h2 class="center">The RSS:{{ site.current_year }} sponsor list is not yet available</h2>
{%- endif -%}
{%- else -%}
<h2 class="center">The RSS:{{ site.current_year }} sponsor list is not yet available</h2>
{%- endif -%}