{%- assign currentKeynotes = collections.keynotes | where: "data.year", site.current_year | sort: "data.weight" -%}
{%- assign numberKeynotes = currentKeynotes | size -%}
{%- if numberKeynotes > 0 -%}
  <div class="col-sm-12">
<hr class="thin">
	<h1>RSS:{{ site.current_year }} Keynote Speakers</h1>
<hr class="thin">
	{%- for keynote in currentKeynotes -%}
	<div class="row">
	  <div class="col-sm-12">
		{%- if keynote.data.more_link -%}
		<h2><a href="{{ keynote.data.permalink }}">{{ keynote.data.name }}</a></h2>
		{%- else -%}
		<h2>{{ keynote.data.name }}</h2>
		{%- endif -%}
	  </div>
	  {%- if keynote.data.professional_title -%}
		<div class="col-sm-12 mb-5"><em>{{ keynote.data.professional_title }}</em></div>
	  {%- endif -%}
	  {%- if keynote.data.photo -%}
		<div class="col-sm-3"><img class="fluid-image" src="/{{ keynote.data.year }}/keynotes/{{ keynote.data.photo }}" alt="{{ keynote.data.name }}" /></div>
		<div class="col-9">{{ keynote.data.intro | markdownify }}</div>
	  {%- else -%}
		<div class="col-12">{{ keynote.data.intro | markdownify }}</div>
	  {%- endif -%}
	</div>
	{%- endfor -%}
  </div>
{%- endif -%}