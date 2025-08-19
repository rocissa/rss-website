---
title: Schedule
layout: page
---

{% if site.schedule_not_yet_available %}
<h2 class="center">The RSS:{{ site.current_year }} schedule is not yet available</h2>
{% endif %}

{% if site.schedule_available %}

    {% if site.schedule_tentative %}
    <div class="bg-warning text-warning warning">Tentative schedule &mdash; subject to change.</div>
    {% endif %}

## Day 1 - October 8 (Wednesday)

{% assign schedule = schedules[site.current_year].day1 %}

<div class="schedule schedule-2025" x-data
  @click.window.capture="
    document.querySelector('.schedule-modal-content > div').id = $event.target.getAttribute('x-target');
    document.querySelector('#schedule-modal').showModal();
  ">
  <div class="no-mobile title">Start</div>
  <div class="no-mobile title">End</div>
  <div class="no-mobile full-session">&nbsp;</div>
  
  <div class="no-mobile">7:30 am</div>
  <div class="no-mobile">8:30 am</div>
  <div class="full-session">
    <div class="title">Registration</div>
    <div class="times">7:30 am - 8:30 am</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">8:00 am</div>
  <div class="no-mobile">8:30 am</div>
  <div class="full-session">
    <div class="title">Breakfast</div>
    <div class="times">8:00 am - 8:30 am</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile lilac">8:30 am</div>
  <div class="no-mobile lilac">9:40 am</div>
  <div class="full-session lilac">
    <div class="title">
      Opening Remarks &amp; Keynote<br>
      <div class="title"><a href="{{ schedule.keynotes[0].url }}">{{ schedule.keynotes[0].presenter }}{% if schedule.keynotes[0].title %}: {{ schedule.keynotes[0].title }}{% endif %}</a></div>
    </div>
    <div class="times">8:30 am - 9:40 am</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">9:40 am</div>
  <div class="no-mobile">10:00 am</div>
  <div class="full-session">
    <div class="title">Sponsor Visitation Break</div>
    <div class="times">9:40 am - 10:00 am</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile track track1 title"><div class="icon-tags"><ul><li aria-label="Human Factors &amp;  Awareness"><span aria-hidden="true">🟪</span></li><li aria-label="AI &amp; Emerging Technology"><span aria-hidden="true">🔺</span></li></ul></div> Track 1</div>
  <div class="no-mobile track track2 title"><div class="icon-tags"><ul><li aria-label="Business, Governance &amp; Risk"><span aria-hidden="true">🔷</span></li></ul></div>Track 2</div>
  <div class="no-mobile track track3 title"><div class="icon-tags"><ul><li aria-label="Technical Defense &amp; Infrastructure"><span aria-hidden="true">🟠</span></li></ul></div>Track 3</div>
  <div class="no-mobile track other-events title">Other Events</div>
  <div class="no-mobile track sponsor columns-2 title">Sponsor Track</div>
  
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile room track1">Grand Lilac Ballroom</div>
  <div class="no-mobile room track2 ">Highland A/B</div>
  <div class="no-mobile room track3">Highland D/E</div>
  <div class="no-mobile room other-events">Highland C - Come &amp; Go</div>
  <div class="no-mobile room sponsor1">Aqueduct A/B</div>
  <div class="no-mobile room sponsor2">Aqueduct C/D</div>
  
  <div class="no-mobile">10:00 am</div>
  <div class="no-mobile">10:50 am</div>
  {%- assign slot = 0 -%}
  {%- include "schedule_slot.md" -%}
  <div class="gap"></div>
  
  <div class="no-mobile">11:00 am</div>
  <div class="no-mobile">11:50 am</div>
  {%- assign slot = 1 -%}
  {%- include "schedule_slot.md" -%}
  <div class="gap"></div>
  
  <div class="no-mobile">12:00 pm</div>
  <div class="no-mobile">1:00 pm</div>
  <div class="full-session">
    <div class="title">Lunch</div>
    <div class="times">12:00 pm - 1:00 pm</div>
    <div class="room">Empire Hall (2nd Floor)</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">1:00 pm</div>
  <div class="no-mobile">1:50 pm</div>
  {%- assign slot = 2 -%}
  {%- include "schedule_slot.md" -%}
  <div class="gap"></div>
  
  <div class="no-mobile">2:00 pm</div>
  <div class="no-mobile">2:50 pm</div>
  {%- assign slot = 3 -%}
  {%- include "schedule_slot.md" -%}
  <div class="gap"></div>
  
  <div class="no-mobile">3:00 pm</div>
  <div class="no-mobile">3:45 pm</div>
  <div class="full-session">
    <div class="title">Sponsor Visitation Break</div>
    <div class="times">3:00 pm - 3:45 pm</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile lilac">3:45 pm</div>
  <div class="no-mobile lilac">4:45 pm</div>
  <div class="full-session lilac">
    <div class="title">
      Keynote<br>
      <a href="{{ schedule.keynotes[1].url }}">{{ schedule.keynotes[1].presenter }}{% if schedule.keynotes[1].title %}: {{ schedule.keynotes[1].title }}{% endif %}</a></div>
    <div class="times">3:45 pm - 4:45 pm</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
</div>

{% if schedule.show_legend %}<div class="schedule-legend">
  <h3>Legend</h3>
  <dl>
    {%- for icon in schedule.icons -%}
    {{ icon.label }}
    <dt>{{ icon[1].icon }}</dt>
    <dd>{{ icon[1].label }}</dd>
    {%- endfor -%}
  </dl>
</div>{% endif %}

## Day 2 - October 9 (Thursday)

{% assign schedule = schedules[site.current_year].day2 %}

<div class="schedule schedule-2025">
  <div class="no-mobile title">Start</div>
  <div class="no-mobile title">End</div>
  <div class="no-mobile full-session">&nbsp;</div>
  
  <div class="no-mobile">7:30 am</div>
  <div class="no-mobile">8:30 am</div>
  <div class="full-session">
    <div class="title">Registration</div>
    <div class="times">7:30 am - 8:30 am</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">8:00 am</div>
  <div class="no-mobile">8:30 am</div>
  <div class="full-session">
    <div class="title">Breakfast</div>
    <div class="times">8:00 am - 8:30 am</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile lilac">8:30 am</div>
  <div class="no-mobile lilac">9:40 am</div>
  <div class="full-session lilac">
    <div class="title">
      Keynote<br>
      <a href="{{ schedule.keynotes[0].url }}">{{ schedule.keynotes[0].presenter }}{% if schedule.keynotes[0].title %}: {{ schedule.keynotes[0].title }}{% endif %}</a>
    </div>
    <div class="times">8:30 am - 9:40 am</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">9:40 am</div>
  <div class="no-mobile">10:00 am</div>
  <div class="full-session">
    <div class="title">Sponsor Visitation Break</div>
    <div class="times">9:40 am - 10:00 am</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile track track1 title"><div class="icon-tags"><ul><li aria-label="Human Factors &amp;  Awareness"><span aria-hidden="true">🟪</span></li><li aria-label="AI &amp; Emerging Technology"><span aria-hidden="true">🔺</span></li><li aria-label="Business, Governance &amp; Risk"><span aria-hidden="true">🔷</span></li><li aria-label="Technical Defense &amp; Infrastructure"><span aria-hidden="true">🟠</span></li></ul></div>Track 1</div>
  <div class="no-mobile track track2 title"><div class="icon-tags"><ul><li aria-label="Industry &amp; Community Perspectives"><span aria-hidden="true">⭐</span></li><li aria-label="Business, Governance &amp; Risk"><span aria-hidden="true">🔷</span></li></ul></div>Track 2</div>
  <div class="no-mobile track track3 title"><div class="icon-tags"><ul><li aria-label="Technical Defense &amp; Infrastructure"><span aria-hidden="true">🟠</span></li></ul></div>Track 3</div>
  <div class="no-mobile track other-events title">Other Events</div>
  <div class="no-mobile track sponsor columns-2 title">Sponsor Track</div>
  
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile room track1">Grand Lilac Ballroom</div>
  <div class="no-mobile room track2 ">Highland A/B</div>
  <div class="no-mobile room track3">Highland D/E</div>
  <div class="no-mobile room other-events">Highland C - Come &amp; Go</div>
  <div class="no-mobile room sponsor1">Aqueduct A/B</div>
  <div class="no-mobile room sponsor2">Aqueduct C/D</div>
  
  <div class="no-mobile">10:00 am</div>
  <div class="no-mobile">10:50 am</div>
  {%- assign slot = 0 -%}
  {% include "schedule_slot.md" %}
  <div class="gap"></div>
  
  <div class="no-mobile">11:00 am</div>
  <div class="no-mobile">11:50 am</div>
  {%- assign slot = 1 -%}
  {% include "schedule_slot.md" %}
  <div class="gap"></div>
  
  <div class="no-mobile">12:00 pm</div>
  <div class="no-mobile">1:00 pm</div>
  <div class="full-session">
    <div class="title">Lunch</div>
    <div class="times">12:00 pm - 1:00 pm</div>
    <div class="room">Empire Hall (2nd Floor)</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">1:00 pm</div>
  <div class="no-mobile">1:50 pm</div>
  {%- assign slot = 2 -%}
  {% include "schedule_slot.md" %}
  <div class="gap"></div>

  <div class="no-mobile">2:00 pm</div>
  <div class="no-mobile">2:50 pm</div>
  {%- assign slot = 3 -%}
  {% include "schedule_slot.md" %}
  <div class="gap"></div>

  <div class="no-mobile">2:50 pm</div>
  <div class="no-mobile">3:00 pm</div>
  <div class="full-session">
    <div class="title">Snack Break</div>
    <div class="times">2:50 pm - 3:00 pm</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile lilac">3:00 pm</div>
  <div class="no-mobile lilac">4:00 pm</div>
  <div class="full-session lilac">
    <div class="title">Happy Hour, Closing Remarks, and Raffles</div>
    <div class="times">3:00 pm - 4:00 pm</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
</div>   

{% if schedule.show_legend %}<div class="schedule-legend">
  <h3>Legend</h3>
  <dl>
    {%- for icon in schedule.icons -%}
    {{ icon.label }}
    <dt>{{ icon[1].icon }}</dt>
    <dd>{{ icon[1].label }}</dd>
    {%- endfor -%}
  </dl>
</div>{% endif %}

<dialog id="schedule-modal" x-ref="scheduleModal" x-data>
  <header>
    <button @click="$refs.scheduleModal.close();"
      aria-label="Close"><span class="fa-solid fa-circle-xmark"></span></button>
  </header>
  <div x-ref="scheduleModalContent" class="schedule-modal-content"><div></div></div>
</dialog>
{% endif %}
