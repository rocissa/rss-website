---
title: Past Events
layout: page
---
	{%- assign confs = collections.conferences | sort:"data.year" | reverse -%}
    {%- for conf in confs -%}
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