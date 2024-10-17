---
title: RSS:2024 Conference Schedule
layout: page
conference: 2024
---
## Day 1 - October 9 (Wednesday)

{% assign schedule = schedules[site.current_year].day1 %}

<div class="schedule schedule-2024" x-data
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
  <div class="no-mobile lilac">8:40 am</div>
  <div class="full-session lilac">
    <div class="title">Introductions</div>
    <div class="times">8:30 am - 8:40 am</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile lilac">8:40 am</div>
  <div class="no-mobile lilac">9:40 am</div>
  <div class="full-session lilac">
    <div class="title">Keynote - <a href="{{ schedule.keynotes[0].url }}">{{ schedule.keynotes[0].presenter }}</a></div>
    <div class="times">8:40 am - 9:40 am</div>
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
  <div class="no-mobile track track1 title">AI Track</div>
  <div class="no-mobile track track2 title">GRC/Risk Track</div>
  <div class="no-mobile track track3 title">Training/Show and Tell Track</div>
  <div class="no-mobile track sponsor columns-2 title">Sponsor Track</div>
  
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile room track1">Grand Lilac Ballroom</div>
  <div class="no-mobile room track2 ">Highland A/B</div>
  <div class="no-mobile room track3">Highland D/E</div>
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
  <div class="no-mobile">3:30 pm</div>
  <div class="full-session">
    <div class="title">Sponsor Visitation Break</div>
    <div class="times">3:00 pm - 3:30 pm</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile lilac">3:30 pm</div>
  <div class="no-mobile lilac">4:30 pm</div>
  <div class="full-session lilac">
    <div class="title">Keynote - <a href="{{ schedule.keynotes[1].url }}">{{ schedule.keynotes[1].presenter }}</a></div>
    <div class="times">3:30 pm - 4:30 pm</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile">4:30 pm</div>
  <div class="no-mobile">5:30 pm</div>
  <div class="full-session">
    <div class="title">Happy Hour</div>
    <div class="times">4:30 pm - 5:30 pm</div>
  </div>
</div>

## Day 2 - October 10 (Thursday)

{% assign schedule = schedules[site.current_year].day2 %}

<div class="schedule schedule-2024">
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
  <div class="no-mobile lilac">8:40 am</div>
  <div class="full-session lilac">
    <div class="title">Introductions</div>
    <div class="times">8:30 am - 8:40 am</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
  <div class="gap"></div>
  
  <div class="no-mobile lilac">8:40 am</div>
  <div class="no-mobile lilac">9:40 am</div>
  <div class="full-session lilac">
    <div class="title">Keynote - <a href="{{ schedule.keynotes[0].url }}">{{ schedule.keynotes[0].presenter }}</a></div>
    <div class="times">8:40 am - 9:40 am</div>
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
  <div class="no-mobile track track1 title">War Stories Track</div>
  <div class="no-mobile track track2 title">GRC/Risk Track</div>
  <div class="no-mobile track track3 title">Cyber Defense Track</div>
  <div class="no-mobile track sponsor columns-2 title">Sponsor Track</div>
  
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile">&nbsp;</div>
  <div class="no-mobile room track1">Grand Lilac Ballroom</div>
  <div class="no-mobile room track2 ">Highland A/B</div>
  <div class="no-mobile room track3">Highland D/E</div>
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
  
  <div class="no-mobile">3:00 pm</div>
  <div class="no-mobile">3:50 pm</div>
  {%- assign slot = 4 -%}
  {% include "schedule_slot.md" %}
  <div class="gap"></div>
  
  <div class="no-mobile lilac">4:00 pm</div>
  <div class="no-mobile lilac">5:00 pm</div>
  <div class="full-session lilac">
    <div class="title">Closing Remarks & Raffles</div>
    <div class="times">4:00 pm - 5:00 pm</div>
    <div class="room">Grand Lilac Ballroom</div>
  </div>
  <dialog id="schedule-modal" x-ref="scheduleModal" x-data>
    <header>
      <button @click="$refs.scheduleModal.close();"
        aria-label="Close"><span class="fa-solid fa-circle-xmark"></span></button>
    </header>
    <div x-ref="scheduleModalContent" class="schedule-modal-content"><div></div></div>
  </dialog>
</div>  
