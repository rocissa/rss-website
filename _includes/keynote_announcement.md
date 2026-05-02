{%- assign currentKeynotes = collections.keynotes | where: "data.year", active_year | sort: "data.weight" -%}
{%- assign numberKeynotes = currentKeynotes | size -%}
{%- if numberKeynotes > 0 -%}
  <div class="col-sm-12">
<hr class="thin">
	<h1>RSS:{{ active_year }} Keynote Speakers</h1>
<hr class="thin">

  <p>We are excited to announce our 20th Anniversary Keynote line up for the Rochester Security Summit.</p>
  <div class="row mx-auto">
	{%- for keynote in currentKeynotes -%}
	  <div class="col-md-4 text-center mb-5">
		<div class="h3"><strong>{{ keynote.data.name }}</strong></div>
		<div class="mt-3"><em>{{ keynote.data.professional_title }}</em></div>
	  </div>
	{%- endfor -%}
  </div>
  </div>
{%- endif -%}
