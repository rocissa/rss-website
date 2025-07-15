{%- assign level_heading = 'h2' -%}
{%- if sponsors_ready_to_display -%}
{%- assign currentSponsors = sponsors[active_year] -%}
{%- assign numberSponsors = currentSponsors | size -%}
{%- if numberSponsors > 0 -%}

*** On homepage sponsors

  <div class="row sponsors">
    {%- assign sponsor_level = "" -%}
	{%- for sponsor in currentSponsors -%}
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
<{{ level_heading }} class="center">The RSS:{{ active_year }} sponsor list is not yet available</{{ level_heading }}>
{%- endif -%}
{%- else -%}
<{{ level_heading }} class="center">The RSS:{{ active_year }} sponsor list is not yet available</{{ level_heading }}>
{%- endif -%}