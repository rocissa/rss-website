---
title: RSS:2023 Presentation Slides
layout: page
conference: 2023
---
{%- assign keynotes = schedules[conference].day1.keynotes | concat: schedules[conference].day2.keynotes -%}
{%- assign tracks = schedules[conference].day1.tracks -%}
## Keynotes

<ul>
{% for session in keynotes %}
  <li class="mb-3">{{ session.presenter }}
  {% if session.links %}
    <ul class="fa-ul">
      {%- for link in session.links -%}
        <li><span class="fa-li"><span class="{{ link.icon }}"></span></span><a href="{{ link.url }}" target="_blank">{{ link.title }}</a></li>
      {% endfor %}
    </ul>
  {% endif %}
  </li>
{% endfor %}
</ul>

{% for track in tracks %}
  {% if track.show_on_slides_page %}
## {{ track.name }}
<ul>
    {%- assign sessions = schedules[conference].day1.sessions[track.id] | concat: schedules[conference].day2.sessions[track.id] -%}
    {%- for session in sessions -%}
      {%- if session.empty != true and session.skip != true %}
  <li class="mb-5"><a href="{{session.url }}" target="_blank">{{ session.title }}</a> ({{ session.presenter }})
        {% if session.links %}
        <ul class="fa-ul">
          {%- for link in session.links -%}
            <li><span class="fa-li"><span class="{{ link.icon }}"></span></span><a href="{{ link.url }}" target="_blank">{{ link.title }}</a></li>
          {% endfor %}
        </ul>
        {% endif %}
      {% endif %}
  </li>
    {% endfor %}
</ul>
  {% endif %}
{% endfor %}