---
layout: page
---

<!-- Slider Start -->
<section id="slider">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          <h1 class="animated fadeInUp text-center">ROCHESTER SECURITY SUMMIT {{ site.current_year }}</h1>
          {% if collections.confrences[site.current_year].theme %}<p class="animated fadeInUp text-center">ollections.confrences[site.current_year].theme</p>{% endif %}
          <p class="animated fadeInUp text-center">October 25-26, 2023</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- <section id="conference">
	<div class="col-md-6">
		<h1>RSS:{{ site.current_year }}</h1>
		<h2>October XX-YY, 2022</h2>
		<p>Joseph A. Floreano Rochester Riverside Convention Center<br>
		Rochester, NY</p>
	</div>
	<aside id="tickets" class="col-md-6">
		<h1>Tickets</h1>
		<ul class="ticket-options">
		  <li>
		    <h2>Early Bird Ticket</h2>
		    <div class="price">$###</div>
            <div class="info">Available through ##/##/##</div>
          </li>
          <li>
          	<h2>Standard Ticket</h2>
            <div class="price">$###</div>
            <div class="info">Available through ##/##/##</div>
          </li>
          <li>
            <h2>Late Ticket</h2>
            <div class="price">$###</div>
            <div class="info">Available through ##/##/##</div>
          </li>
        </ul>
        <div class="text-center"><a class="btn btn-lg btn-prmary" href="#">Purchase Tickets</a></div>
    </aside>
</section>

<section id="about">
	<p>The Rochester Security Summit is the lorem ipsub dolar sit amet...</p>
</section>

<section id="announcements">
	<div class="col-md-12">
		{%- if site.homepage_show_call_for_volunteers == true -%}
## Interested in helping out with RSS:2022?

Please let us know at [info@rochestersecurity.org](mailto:info@rochestersecurity.org).
    {%- endif -%}
	</div>
</section> -->

{%- if site.homepage_show_venue == true or site.homepage_show_hotels == true -%}
<section id="location" class="clearfix">
	  <div class="col-md-12">
		  <h2>Location</h2>
		  {% if site.homepage_show_venue == true and site.homepage_show_hotels == true %}
		  <div class="col-md-6">
		  	<h3>Conference Venue</h3>
		  	<div class="venueimage"><img src="images/ConventionCenter.jpg" alt="Exterior photo of the Joseph A. Floreano Rochester Riverside Convention Center including sign in front of building"></div>
	      <h4 class="text-center">Joseph A. Floreano Rochester Riverside Convention Center</h4>
			  <div class="text-center">125 East Main Street<br> 
			    Rochester, NY USA 14604</div>
			  <div class="text-center"><a href="https://www.rrcc.com" target="_blank">www.rrcc.com</a></div>
		  </div>
		  <div class="col-md-6">
		  	<h3>Hotel Accommodations</h3>
		  	<ul class="hotellist">
		  		{%- include 'hotels.md' -%}
		  	</ul>
		  </div>
		  {% elsif site.homepage_show_venue == true %}
		  <div class="col-md-12">
		  	<h3>Conference Venue</h3>
		  	  <div class="col-md-6">
		  	  	<div class="venueimage"><img src="images/ConventionCenter.jpg" alt="Exterior photo of the Joseph A. Floreano Rochester Riverside Convention Center including sign in front of building"></div>
		  	  </div>
		  	  <div class="col-md-6 text-center">
		  	  	<h4 style="margin-top: 50px;">Joseph A. Floreano<br>
		  	  	Rochester Riverside Convention Center</h4>
			      <div style="margin-top: 25px;">125 East Main Street<br> 
			        Rochester, NY USA 14604</div>
			      <div><a href="https://www.rrcc.com" target="_blank">www.rrcc.com</a></div>
		  	  </div>
		  </div>
		  {% elsif site.homepage_show_hotels == true %}
		  <div class="col-md-12">
		  	<h3>Hotel Accommodations</h3>
		  	<ul class="hotellist">
		  		{%- include 'hotels.md' -%}
		  	</ul>
	  </div>
	  {% endif %}
	</div>
</section>
{%- endif -%}

<section id="sponsors">
	{%- if site.homepage_sponsors_show_current_year AND site.homepage_sponsors_show_prevous_year -%}
	  <h2>Sponsors</h2>
	  <h3 class="text-center">RSS:{{ site.current_year }} Sponsors</h3>
	  {%- assign active_year = site.current_year -%}
	  {%- assign level_heading = 'h4' -%}
	  {%- include 'homepage_sponsors.md' -%}

	  <h3 class="text-center">RSS:{{ site.previous_year }} Sponsors</h3>
	  {%- assign active_year = site.previous_year -%}
	  {%- include 'homepage_sponsors.md' -%}

	{%- elsif site.homepage_sponsors_show_current_year -%}
	  <h2>RSS:{{ site.current_year }} Sponsors</h2>
	  {%- assign active_year = site.current_year -%}
	  {%- assign level_heading = 'h3' -%}
	  {%- include 'homepage_sponsors.md' -%}

	{%- elsif site.homepage_sponsors_show_prevous_year-%}
	  <h2>RSS:{{ site.previous_year }} Sponsors</h2>
	  {%- assign active_year = site.previous_year -%}
	  {%- assign level_heading = 'h3' -%}
	  {%- include 'homepage_sponsors.md' -%}
	{%- endif -%}
</section>

