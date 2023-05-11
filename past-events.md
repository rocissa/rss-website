---
title: Past Events
layout: page
---
	{%- for conf in collections.conferences reversed -%}
        {%- if site.current_year != conf.data.year -%}
	        {%- assign active_year = conf.data.year -%}
            <article class="row">
                <div class="col-md-12">
                    <h1>RSS:{{ conf.data.year }}</h1>
                    {% if conf.data.theme %}<h2>{{ conf.data.theme }}</h2>{% endif %}

                    {%- include 'keynotes.md' -%}

                    {{ conf.content }}

                    {%- include 'sponsors.md' -%}
                </div>
            </article>
        {% endif %}
    {% endfor %}