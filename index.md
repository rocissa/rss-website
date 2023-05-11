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
        </div>
      </div>
    </div>
  </div>
</section>

<section id="conference">
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
	<p>The Rochester Security Summit is the lorem ipsub dolar sit amet...</p>p>
</section>

{%- if site.homepage_show_venue -%}
<section id="location">
    <h2>Conference Venue</h2>
	<div class="col-md-6">
		<img src="images/ConventionCenter.jpg" alt="Exterior photo of the Joseph A. Floreano Rochester Riverside Convention Center including sign in front of building">
	</div>
	<div class="col-md-6 text-center">
		<h3>Joseph A. Floreano Rochester Riverside Convention Center</h3>
		<div>125 East Main Street<br> 
		Rochester, NY USA 14604</div>
		<div><a href="https://www.rrcc.com" target="_blank">www.rrcc.com</a></div>
	</div>
</section>
{%- endif -%}

<section id="sponsors">
	{%- if site.homepage_sponsors_show_current_year AND site.homepage_sponsors_show_prevous_year -%}
	<h1>Sponsors</h1>
	<h2 class="text-center">RSS:{{ site.current_year }} Sponsors</h2>
	<h2 class="text-center">RSS:{{ site.previous_year }} Sponsors</h2>
	{%- elsif site.homepage_sponsors_show_current_year -%}
	<h1>RSS:{{ site.current_year }} Sponsors</h1>
	{%- elsif site.homepage_sponsors_show_prevous_year-%}
	<h1>RSS:{{ site.previous_year }}</h1>
	{%- endif -%}
</section>

