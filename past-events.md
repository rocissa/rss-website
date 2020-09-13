---
title: Past Events
layout: page
---
<div class="container">
	{% for conf in site.conferences reversed %}
        {% if site.current_year != conf.year %}
	        {% assign active_year = conf.year %}
            <article class="row">
                <div class="col-md-12">
                    <h1>RSS:{{ conf.year }}</h1>
                    {% if conf.theme %}<h2>{{ conf.theme }}</h2>{% endif %}

                    {% include keynotes.html %}

                    {{ conf.content }}

                    {% include sponsors.html %}
                </div>
            </article>
        {% endif %}
    {% endfor %}
</div>