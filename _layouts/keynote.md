---
layout: default
eleventyComputed:
    title: "{{ name }}"
---
<div class="container" id="keynote">
	<div class="row">
		<div class="col-md-12">
            <h1>{{ name }}</h1>
        </div>
        {% if professional_title %}
            <div class="col-md-12 mb-5"><em>{{ professional_title }}</em></div>
        {% endif %}
        {% if photo %}
        <div class="col-md-4">
            <img class="fluid-image" src="/{{ year }}/keynotes/{{ photo }}" alt="{{ name }}" />
        </div>
        <div class="col-md-8">
            {{ content }}
        </div>
        {% else %}
        <div class="col-md-12">
            {{ content }}
        </div>
        {% endif %}
    </div>
</div>