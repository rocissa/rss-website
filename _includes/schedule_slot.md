{%- for track in schedule.tracks -%}
  {%- if schedule.sessions[track.id][slot].skip != true -%}
    {%- if schedule.sessions[track.id][slot].empty == true -%}
      <div class="empty {% if schedule.sessions[track.id][slot].length > 1 %}rows-{{ schedule.sessions[track.id][slot].length }}{% endif %}"></div>
    {%- else -%}
      <div class="session {{ track.id }} {% if schedule.sessions[track.id][slot].length > 1 %}rows-{{ schedule.sessions[track.id][slot].length }}{% endif %}">
        {%- if schedule.sessions[track.id][slot].title -%}<div class="title">{% if schedule.sessions[track.id][slot].url %}<a href="{{ schedule.sessions[track.id][slot].url }}" x-target="{{ schedule.sessions[track.id][slot].url | split: '#' | last }}">{% endif %}{{ schedule.sessions[track.id][slot].title }}{% if schedule.sessions[track.id][slot].url %}</a>{% endif %}</div>{%- endif -%}
        {%- if schedule.sessions[track.id][slot].presenter -%}<div class="presenter">{{ schedule.sessions[track.id][slot].presenter }}</div>{%- endif -%}
        <div class="times">{%- if schedule.sessions[track.id][slot].start -%}{{ schedule.sessions[track.id][slot].start }}{%- else -%}{{ schedule.session_times[slot].start }}{%- endif -%} - {%- if schedule.sessions[track.id][slot].end -%}{{ schedule.sessions[track.id][slot].end }}{%- else -%}{{ schedule.session_times[slot].end }}{%- endif -%}</div>
        {%- assign this_track = schedule.tracks | where: "id", track.id | first -%}
        <div class="room">{{ this_track.name }} - {{ this_track.room }}</div>
      </div>
    {%- endif -%}
  {%- endif -%}
{%- endfor -%}