{%- if sponsors_ready_to_display -%}
{%- assign currentSponsors = sponsors[active_year] -%}
{%- assign numberSponsors = currentSponsors | size -%}
{%- if numberSponsors > 0 -%}
  <div class="row">
    <div class="section-title text-center">
<hr class="thin">
        <{{ title_heading }}>RSS:{{ active_year }} Sponsors</{{ title_heading }}>
<hr class="thin">
    </div> 
  </div>
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
<{{ title_heading }} class="center">The RSS:{{ active_year }} sponsor list is not yet available</{{ title_heading }}>
{%- endif -%}
{%- else -%}
<{{ title_heading }} class="center">The RSS:{{ active_year }} sponsor list is not yet available</{{ title_heading }}>
{%- endif -%}