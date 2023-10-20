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

<section id="conference" class="clearfix">
	<div class="col-md-6">
		<h1>RSS:{{ site.current_year }}</h1>
		<h2 class="conf-details-dates text-center">Wednesday, October 25 and<br>
		Thursday, October 26, 2023</h2>
		<p class="conf-details-loc text-center">Joseph A. Floreano Rochester Riverside Convention Center<br>
		Rochester, NY</p>
	</div>
	<aside id="tickets" class="col-md-6">
		{%- if site.registration_enabled == true -%}
		<h1>Tickets</h1>
		<ul class="ticket-options">
			{%- if site.registration_early_bird -%}
		  <li>
		    <h2>Early Bird Registration</h2>
		    <div class="price">$150.00</div>
        <div class="info">Limited availability. First come, first served.</div>
      </li>
      {%- endif -%}
      {%- if site.registration_standard -%}
      <li>
      	<h2>Standard Registration</h2>
        <div class="price">$250.00</div>
        <div class="info">Sale ends on 10/06/2023</div>
      </li>
      {%- endif -%}
      {%- if site.registration_late -%}
      <li>
        <h2>Late Registration</h2>
        <div class="price">$350.00</div>
        <div class="info">Available starting 10/06/2023, until sold out</div>
      </li>
      {%- endif -%}
      </ul>
      <div class="text-center mt-5 mb-5"><a class="btn btn-lg btn-primary pt-5 pb-5 " href="https://events.eventzilla.net/e/rochester-security-summit-2023-2138587562">Purchase Tickets</a></div>
			{%- endif -%}
			{%- if site.registration_sold_out -%}
			<h1>Sold Out</h1>
			<p class="text-center">RSS:{{ site.current_year }} has sold out</p>
			{%- endif -%}
			{%- if site.registration_event_concluded -%}
			<h1>RSS:{{ site.current_year }} Has Concluded</h1>
			<p class="text-center">We hope to see you next year.</p>
			{%- endif -%}
    </aside>
</section>

{% if site.homepage_show_app_links %}
<section id="app" class="clearfix">
  <h1 class="sr-only">Get our app</h1>
  <p class="text-center pb-5 mb-5"><strong>Get our full program via our mobile event app:</strong></p>
  <ul class="app-links">
  	<li><a href="{{ site.app_ios_url }}" target="_blank"><img src="/images/apple-appstore-badge.png" alt="Download on the Apple App Store"></a></li>
  	<li><a href="{{ site.app_android_url }}" target="_blank"><img src="/images/google-play-badge.png" alt="Get it on Google Play"></a></li>
  	<li><a href="{{ site.app_web_url }}" target="_blank" class="btn btn-lg btn-primary">Or View In Your Browser</a></li>
  </ul>
</section>
{% endif %}

<section id="about" class="clearfix">
	<p>Since 2006, the Rochester Security Summit has been a leading regional event that brings together a broad range of experts and professionals from the field of information security. Held annually during National Cyber Security Awareness Month, it serves as a community focal point for education and awareness; fostering discussion, knowledge sharing, and networking to help drive innovation and address the evolving challenges in the security landscape. From emerging trends to practical insights, our goal is to empower attendees with the latest information and strategies to enhance their cybersecurity practices.</p>

	<p>The Rochester Security Summit is brought to you by the <a href="https://www.rocissa.org" target="_blank">Rochester Chapter</a> of the <a href="https://www.issa.org" target="_blank">Infomation Systems Security Association International (ISSA)</a>.</p>
</section>

<!-- <section id="announcements">
	<div class="col-md-12">
		{%- if site.homepage_show_call_for_volunteers == true -%}
## Interested in helping out with RSS:2022?

Please let us know at [info@rochestersecurity.org](mailto:info@rochestersecurity.org).
    {%- endif -%}
	</div>
</section> -->

{%- if site.homepage_show_keynotes -%}
    {%- assign currentKeynotes = collections.keynotes | where: "data.year", site.current_year | sort: "data.weight" -%}
    {%- assign numberKeynotes = currentKeynotes | size -%}
    {%- if numberKeynotes > 0 -%}
    <section id="keynotes" class="clearfix">
	    <div class="col-md-12">
		    <h1>RSS:{{ site.current_year }} Keynote Speakers</h1>
		    {%- for keynote in currentKeynotes -%}
		      <div class="row">
            <div class="col-md-12">
            	{%- if keynote.data.more_link -%}
                <h2><a href="{{ keynote.data.permalink }}">{{ keynote.data.name }}</a></h2>
             	{%- else -%}
                <h2>{{ keynote.data.name }}</h2>
             	{%- endif -%}
            </div>
            {%- if keynote.data.professional_title -%}
                <div class="col-md-12 mb-5"><em>{{ keynote.data.professional_title }}</em></div>
            {%- endif -%}
            {%- if keynote.data.photo -%}
              <div class="col-md-3"><img class="fluid-image" src="/{{ keynote.data.year }}/keynotes/{{ keynote.data.photo }}" alt="{{ keynote.data.name }}" /></div>
              <div class="col-md-9">{{ keynote.data.intro | markdownify }}{% if keynote.data.more_link %} [<a href="{{ keynote.data.permalink }}">more</a>]{% endif %}</div>
            {%- else -%}
              <div class="col-md-12">{{ keynote.data.intro | markdownify }}{% if keynote.data.more_link %} [<a href="{{ keynote.data.permalink }}">more</a>]{% endif %}
              </div>
            {%- endif -%}
          </div>
        {%- endfor -%}
      </div>
	  </section>
	  {%- endif -%}
{%- endif -%}


{%- if site.homepage_show_venue == true or site.homepage_show_hotels == true -%}
<section id="location" class="clearfix">
	  <div class="col-md-12">
		  <h1>Location</h1>
		  {% if site.homepage_show_venue == true and site.homepage_show_hotels == true %}
		  <div class="col-md-6">
		  	<h2>Conference Venue</h2>
		  	<div class="venueimage"><img src="images/ConventionCenter.jpg" alt="Exterior photo of the Joseph A. Floreano Rochester Riverside Convention Center including sign in front of building"></div>
	      <h4 class="text-center">Joseph A. Floreano Rochester Riverside Convention Center</h4>
			  <div class="text-center">125 East Main Street<br> 
			    Rochester, NY USA 14604</div>
			  <div class="text-center"><a href="https://www.rrcc.com" target="_blank">www.rrcc.com</a></div>
			  <div class="text-center"><a href="https://www.rrcc.com/index.cfm?Page=Directions" class="btn btn-lg btn-primary">Driving Directions</a></div>
		  </div>
		  <div class="col-md-6">
		  	<h2>Hotel Accommodations</h2>
		  	<ul class="hotellist">
		  		{%- include 'hotels.md' -%}
		  	</ul>
		  	{% if site.homepage_show_parking %}
		  	  <h2>Parking</h2>
		  	  <p>Confrenece participants should park in the South Ave Garage, located one block east of the convention center.  The garage is connected to the convention center via a skywalk on level three. <strong>Be sure to bring your ticket with you for validation at the conference office, located outside the Grand Lilac Ballroom.</strong></p>
		  	{% endif %}
		  </div>
		  {% elsif site.homepage_show_venue == true %}
		  <div class="col-md-12">
		  	<h2>Conference Venue</h2>
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
		  	<h2>Hotel Accommodations</h2>
		  	<ul class="hotellist">
		  		{%- include 'hotels.md' -%}
		  	</ul>
	  </div>
	  {% endif %}
	</div>
</section>
{%- endif -%}

<section id="cpe">
	<h1>Continuing Education Credits</h1>
	<p>Attending Rochester Security Summit sessions satisfies continuing education requirements for a number of professional certifications. Certificates of attendance are provided to participants. If you have misplaced your certificate, please send an email to <a href="mailto:cpe@rochestersecurity.org">cpe@rochestersecurity.org</a>.</p>
</section>

<section id="sponsors">
	{%- if site.homepage_sponsors_show_current_year and site.homepage_sponsors_show_previous_year -%}
	  <h1>Sponsors</h1>
	  <h2 class="text-center">RSS:{{ site.current_year }} Sponsors</h2>
	  {%- assign active_year = site.current_year -%}
	  {%- assign level_heading = 'h4' -%}
	  {%- include 'homepage_sponsors.md' -%}

	  <h2 class="text-center">RSS:{{ site.previous_year }} Sponsors</h2>
	  {%- assign active_year = site.previous_year -%}
	  {%- include 'homepage_sponsors.md' -%}

	{%- elsif site.homepage_sponsors_show_current_year -%}
	  <h1>RSS:{{ site.current_year }} Sponsors</h1>
	  {%- assign active_year = site.current_year -%}
	  {%- assign level_heading = 'h2' -%}
	  {%- include 'homepage_sponsors.md' -%}

	{%- elsif site.homepage_sponsors_show_prevous_year -%}
	  <h1>RSS:{{ site.previous_year }} Sponsors</h1>
	  {%- assign active_year = site.previous_year -%}
	  {%- assign level_heading = 'h2' -%}
	  {%- include 'homepage_sponsors.md' -%}
	{%- endif -%}
</section>

