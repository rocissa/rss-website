---
title: RSS:2024 Presentation Slides
layout: page
conference: 2024
---
{%- assign keynotes = schedules[conference].day1.keynotes | concat: schedules[conference].day2.keynotes -%}
{%- assign day1tracks = schedules[conference].day1.tracks -%}
{%- assign day2tracks = schedules[conference].day2.tracks -%}
## Keynotes

<ul>
{% for session in keynotes %}
  <li class="mb-3"><a href="{{ session.url }}">{{ session.presenter }}</a>
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

{% for track in day1tracks %}
  {% if track.show_on_slides_page %}
## Day 1 - {{ track.name }}
<ul>
    {%- assign sessions = schedules[conference].day1.sessions[track.id] -%}
    {%- for session in sessions -%}
      {%- if session.empty != true and session.skip != true %}
  <li class="mb-5"><strong>{{ session.title }}</strong> ({{ session.presenter }})
        <ul class="fa-ul">
          <li><span class="fa-li"><span class="fa-solid fa-person-chalkboard"></span></span><a href="{{ session.url }}" target="_blank">Session Abstract and Presenter Bios</a></li>
          {%- for link in session.links -%}
            <li><span class="fa-li"><span class="{{ link.icon }}"></span></span><a href="{{ link.url }}" target="_blank">{{ link.title }}</a></li>
          {% endfor %}
        </ul>
      {% endif %}
  </li>
    {% endfor %}
</ul>
  {% endif %}
{% endfor %}

{% for track in day2tracks %}
  {% if track.show_on_slides_page %}
## Day 2 - {{ track.name }}
<ul>
    {%- assign sessions = schedules[conference].day2.sessions[track.id] -%}
    {%- for session in sessions -%}
      {%- if session.empty != true and session.skip != true %}
  <li class="mb-5"><strong>{{ session.title }}</strong> ({{ session.presenter }})
        <ul class="fa-ul">
          <li><span class="fa-li"><span class="fa-solid fa-person-chalkboard"></span></span><a href="{{ session.url }}" target="_blank">Session Abstract and Presenter Bios</a></li>
          {%- for link in session.links -%}
            <li><span class="fa-li"><span class="{{ link.icon }}"></span></span><a href="{{ link.url }}" target="_blank">{{ link.title }}</a></li>
          {% endfor %}
        </ul>
      {% endif %}
  </li>
    {% endfor %}
</ul>
  {% endif %}
{% endfor %}