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
          <p class="animated fadeInUp text-center">October 25-26, 2023<br />
          Rochester Riverside Convention Center</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="conference">
	<div class="col-md-6">
		<h1>RSS:{{ site.current_year }}</h1>
		<h2 class="conf-details-dates text-center">Wednesday, October 25 and<br>
		Thursday, October 26, 2023</h2>
		<p class="conf-details-loc text-center">Joseph A. Floreano Rochester Riverside Convention Center<br>
		Rochester, NY</p>
	</div>
	<aside id="tickets" class="col-md-6">
		<h1>Tickets</h1>
		<ul class="ticket-options">
		  <li>
		    <h2>Early Bird Registration</h2>
		    <div class="price">$150.00</div>
            <div class="info">Limited availability. First come, first served.</div>
          </li>
          <li>
          	<h2>Standard Registration</h2>
            <div class="price">$250.00</div>
            <div class="info">Sale ends on 09/22/2023</div>
          </li>
          <li>
            <h2>Late Registration</h2>
            <div class="price">$350.00</div>
            <div class="info">Available starting 09/21/2023, until sold out</div>
          </li>
        </ul>
        <div class="text-center mt-5 mb-5"><a class="btn btn-lg btn-primary pt-5 pb-5 " href="https://events.eventzilla.net/e/rochester-security-summit-2023-2138587562">Purchase Tickets</a></div>
    </aside>
</section>

<section id="about">
	<p>Since 2006, the Rochester Security Summit has been a leading regional event that brings together a broad range of experts and professionals from the field of information security. Held annually during National Cyber Security Awareness Month, it serves as a community focal point for education and awareness; fostering discussion, knowledge sharing, and networking to help drive innovation and address the evolving challenges in the security landscape. From emerging trends to practical insights, our goal is to empower attendees with the latest information and strategies to enhance their cybersecurity practices.</p>

	<p>The Rochester Security Summit is brought to you by the <a href="https://ww.rocissa.org" target="_blank">Rochester Chapter</a> of the <a href="https://www.issa.org" target="_blank">Infomation Systems Security Association International (ISSA)</a>.</p>
</section>

<!-- <section id="announcements">
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

