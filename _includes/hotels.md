{%- for hotel in hotels -%}
<li>
  <div><strong>{{ hotel.name }}</strong></div>
  <div class="mt-5">{{ hotel.address }}<br>
  {{ hotel.city }}, {{ hotel.state }} {{ hotel.zip }}</div>
  {%- if hotel.discount_rate -%}
    <div class="mt-5">Discount Rate: {{ hotel.discount_rate }}{%- if hotel.discount_expires -%}<br><em>until {{ hotel.discount_expires }}</em>{%- endif -%}
  {%- endif -%}
  {%- if hotel.offer_url -%}<div class="mt-5"><a href="{{ hotel.offer_url }}" class="btn btn-lg btn-primary"}>Book A Room At The {{ hotel.short_name }}</a>{%- endif -%}
</li>
{%- endfor -%}
