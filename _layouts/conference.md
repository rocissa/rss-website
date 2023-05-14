---
layout: default
eleventyComputed:
    title: RSS:{{ year }} {% if theme %} - {{ theme }}{% endif %}
---
{%- assign active_year = year -%}
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>RSS:{{ year }}</h1>
            {% if theme %}<h2>{{ theme }}</h2>{% endif %}
        </div>

        {%- include 'keynotes.md' -%}

        {%- if content -%}
            <div class="col-md-12">
        	    {{ content }}
        	</div>
        {%- endif -%}

        {%- include 'sponsors.md' -%}
    </div>
</div>