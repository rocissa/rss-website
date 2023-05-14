{%- assign currentKeynotes = collections.keynotes | where: "data.year", active_year | sort: "data.weight" -%}
{%- assign numberKeynotes = currentKeynotes | size -%}
{%- if numberKeynotes > 0 -%}
<div class="row">
  <div class="section-title text-center">
      <h3>Keynotes</h3>
  </div> 
</div>
<div class="row keynotes mb-5">
    {%- assign clearAfter = false -%}
    {%- for keynote in currentKeynotes -%}
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-12">
                	{%- if keynote.data.more_link -%}
                	    <h4><a href="{{ keynote.data.permalink }}">{{ keynote.data.name }}</a></h4>
                	{%- else -%}
                	    <h4>{{ keynote.data.name }}</h4>
                	{%- endif -%}
                </div>
                {%- if keynote.data.professional_title -%}
                    <div class="col-md-12 mb-5"><em>{{ keynote.data.professional_title }}</em></div>
                {%- endif -%}
                {%- if keynote.data.photo -%}
                <div class="col-md-4"><img class="fluid-image" src="/{{ keynote.data.year }}/keynotes/{{ keynote.data.photo }}" alt="{{ keynote.data.name }}" /></div>
                <div class="col-md-8">{{ keynote.data.intro | markdownify }}{% if keynote.data.more_link %} [<a href="{{ keynote.data.permalink }}">more</a>]{% endif %}</div>
                {%- else -%}
                <div class="col-md-12">{{ keynote.data.intro | markdownify }}{% if keynote.data.more_link %} [<a href="{{ keynote.data.permalink }}">more</a>]{% endif %}
                </div>
                {%- endif -%}
            </div>
        </div>
        {%- if clearAfter == true -%}
            <div class="clearfix"></div>
            {%- assign clearAfter = false -%}
        {%- else -%}
            {%- assign clearAfter = true -%}
        {%- endif -%}
    {%- endfor -%}
</div>
{%- endif -%}