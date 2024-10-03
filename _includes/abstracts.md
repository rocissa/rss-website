{%- for session in schedule.sessions[track] -%}
  {%- if session.empty != true -%}
	<div class="session-abstract" id="{{ track }}-s{{ forloop.index }}">
		<h2>{{ session.title }}</h2>
		<p><strong>{{ session.presenter }}<br>
			<em>{{ schedule.session_times[forloop.index0 ].start }} - {{ schedule.session_times[forloop.index0].end }}</em></strong></p>
		{{ session.abstract | markdownify }}
		<div class="bios">
		{%- for bio in session.bios -%}
	        <h3>{{ bio.name }}</h3>
	        {{ bio.bio | markdownify }}
	    {%- endfor -%}
	    </div>
	</div>
  {%- endif -%}
{%- endfor -%}