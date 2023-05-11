---
layout: default
---
<div class="container">
	<div class="row">
		<div class="col-md-12">
            <h1>{{ title }}</h1>
        </div>
        {%- if professional_title -%}
            <div class="col-md-12 mb-5"><em>{{ professional_title }}</em></div>
        {%- endif -%}
        <div class="col-md-4">
            <img class="fluid-image" src="../{{ photo }}" alt="{{ title }}" />
        </div>
        <div class="col-md-8">
            {{ content }}
        </div>
    </div>
</div>