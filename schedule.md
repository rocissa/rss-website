---
title: Schedule
layout: page
---

{% if site.schedule_not_yet_available %}
<h2 class="center">The RSS:{{ site.current_year }} schedule is not yet available</h2>
{% endif %}

{% if site.schedule_available %}

    {% if site.schedule_tentative %}
    <div class="alert alert-warnng">Tentative schedule &emdash; subject to change.</div>
    {% endif %}

    <!-- schedule goes here -->
{% endif %}
