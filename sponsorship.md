---
title: Sponsorship Information
layout: page
---

---

<div class="mt-5 mb-5 text-center">
{% if site.sponsorship_show_w9_link == true %}
<a class="btn btn-lg btn-primary" href="/files/w9.pdf">W-9 (PDF)</a>
{% endif %}

{% if site.sponsorship_next_year == true %}
<h2 class="text-center">Sponsorship information for RSS:{{ site.next_year }} will be available this spring</h2>
{% endif %}

{% if site.sponsorship_not_yet_open == true %}
## Sponsorship Not Yet Open
{% endif %}

{% if site.sponsorship_coming_soon == true %}
<div class="attention">
<h2>Sponsorship Opportunities Coming Soon!</h2>
<p><em>Keep an eye on this space for updates and join our mailing list!</em><p>
</div>
<div><a class="btn btn-primary btn-lg" href="/sponsor-mailing-list" target="_blank">Join Our Sponsorship Mailing List</a></div>
<br/>
<div class="block-text">
<p>While we finalize the details for opening sponsorship, we would like to inform you that our Call for Presentations is now open. If you are interested in submitting presentation for consideration, we invite you to visit our submission portal at {{ site.speaking_page_url }}, where you will find detailed instructions and a form to submit your proposal.</p><br>
<p class="text-center"><em>Thank you for your continued interest in RSS:{{ site.current_year }}</em></p>
{% endif %}
</div>

{% if site.sponsorship_open  == true %}
<h2 class="text-center">The official Call for Sponsors for RSS:{{ site.current_year }} is now open</h2>

<div class="mt-5 mb-5 text-center"><a class="btn btn-primary btn-lg" href="{{ site.sponsorship_form_url }}" target="_blank">Submit Call for Sponsors Form</a></div>

## Important Dates

* Call for Sponsors Deadline: {{ site.sponsorship_applications_due | date: "%B %e, %Y" }}

  *Submit a completed form using the link above before this date to be considered*
  
* RSS:{{ site.current_year }} takes place on {% daterange site.conference_start_date, site.conference_end_date %}
{% endif %}
{% if site.sponsorship_waiting_list == true %}
<h2 class="text-center">Sponsorship for RSS:{{ site.current_year }} is currently closed,<br>but join our waitlist.</h2>

<div class="mt-5 mb-5 text-center"><a class="btn btn-primary btn-lg" href="{{ site.sponsorship_form_url }}" target="_blank">Submit Call for Sponsors Form</a></div>
{% endif %}
{% if site.sponsorship_pricing %}
<h2>Sponsor Level Benefits & Pricing</h2>
The below table describes Rochester Security Summit sponsorship opportunities for this year.

<div class="mt-5 mb-5 text-center"><a href="/files/RSS{{ site.current_year }}-Sponsorship-Pricing.pdf"><img id="sponsorship-pricing" src="/files/RSS{{ site.current_year }}-Sponsorship-Pricing.png" alt="Sponsorship Pricing Thumbnail" width="500px" style></a></div>
{% endif %}
{% if site.sponsorship_open %}

## About the Selection Process

> Given limited available space, sponsorships are allocated through lottery.
> By submitting this form, your company will be entered into a random drawing and sponsorship will be awarded according to the order drawn.
> No deposit is taken and organizations can ask to be removed from consideration at any point.
> We will do our best to match your preferences indicated in the form with our available sponsorship opportunities.
> Note, the Diamond Selection is a separate drawing, exclusive to Platinum Sponsors who have indicated an interest in Diamond as a preference level. 
> After the lottery is complete, we will maintain a waiting list of potential sponsors, in case of dropouts or cancellations. 
> Again, thank you for considering sponsoring the Rochester Security Summit. We sincerely appreciate your interest and your involvement in making our event a continued success. 
{% endif %}

{% if site.sponsorship_sold_out == true %}
<h2 class="text-center">Sponsorship for RSS:{{ site.current_year }} has sold out.</h2>

<p class="text-center mt-5 mb-5"><strong>If you would like to be contacted about future opportunities, please register your email address below. Thank you for your interest.</strong></p>
{% endif %}

{% if site.sponsorship_sponsor_information == true %}
## Information for Sponsors

* As Soon As Possible - Provide logo: 2.125” W x 3.2” H and submitted in high resolution EPS format.
* Beginning August 31 - Submit your booth location preference sequence.
* Before September 16 - Register team members in EventBrite
* Before September 23 - Send Diamond and Platinum speaker bios and SEE presentation abstract
* Before October 3 *(Advanced Price Deadline with Great Lakes)* - Decide on booth outfitting. Contract with Convention Center or Great Lakes Events, if desired
* October 3 *(items must be received by this date)* - Ship bag inserts to Great Lakes Events in Rochester, NY
* October 3 *(items handled by Great Lakes Events must be received by this date)* - Ship booth equipment
* October 11, 4:00-8:00 pm -or- October 12, 6:00-7:00 am - Deliver your 2’ x 6’ banner for display in speaker track of your choice
* October 12 - Inform sponsor committee of prize giveaway items and your preferred event for giving the prize

<p class="text-center mt-5 mb-5"><a class="btn btn-lg btn-primary" href="files/Rochester-Security-Summit-Exhibitor-Manual.pdf">Exhibitor Manual<br />(Great Lakes Events)</a></p>
{% endif %}

{% if site.sponsorship_attendee_profile == true %}
<hr>
<div class="attendees">
<h1>Past Attendee Profiles</h1>
<p class="text-center"><em>The Summit has excellent representation across industries and job functions. In 2022, the profile of paid Summit attendees was as follows:</em></p>
<div class="container">
  <div class="row">
    <div class="col-md-6">
	<h3>Attendee Profiles by Industry in 2022</h3>
	<a href="/2022/attendees-by-industry.png" data-fslightbox="gallery"><img src="/2022/attendees-by-industry.png" class="img-responsive" alt="Attendee Profiles by Industry in 2022"></a><br>
<!--
* 13% - Business Services
* 7% - Consumer Products and Services
* 17% - Educational Institutions
* 13% - Financial Institutions and Services
* 5% - Government
* 15% - Health Care Services
* 23% - Technology Companies
* 7% - Energy, Law, Media, and Other Companies
-->
    </div>
    <div class="col-md-6">
	<h3>Attendee Profiles by Job Function in 2022</h3>
	<a href="/2022/attendees-by-job-function.png" data-fslightbox="gallery"><img src="/2022/attendees-by-job-function.png" class="img-responsive" alt="Attendee Profiles by Job Function in 2022 (N=338)"></a><br>
<!--
* 21.1% - Executive, VP or Director Level
* 18.4% - IT Security Management
* 37.4% - Technical Security Professional
* 2.7% - Web or Software Professional
* 20.5% - Other
-->
    </div>
  </div>
</div>
</div>
{% endif %}

{% if site.sponsorship_faq == true %}
## Frequently Asked Questions

<dl>
  <dt>How many attendees are expected in 2019?</dt>
  <dd class="mb-5">While registration has not yet opened for the 2019 Conference, we are planning on keeping numbers similar to last year's numbers. (More than 500 attendees)</dd>

  <dt>How many attended in 2018?</dt>
  <dd class="mb-5">More than 500 attendees</dd>

  <dt>Do we work with a lead generation / scanner service?</dt>
  <dd class="mb-5">We do not currently offer scanners or lead generation tools for sponsors, but do encourage the collection of info through raffle giveaways. We also organize a raffle to encourage attendee visitation to all our different sponsors.<br />
  We provide an opt-in only, pre- and post-event contact list to all payed sponsors.</dd>

  <dt>What is information is included in the opt-in contact list?</dt>
  <dd class="mb-5">Name, E-Mail, Job Title, Company, Work Phone</dd>

  <dt>Regarding the Diamond Sponsorship</dt>
  <dd class="mb-5">The Platinum Sponsors interested in being considered for the Diamond Level sponsorship will be entered into a drawing on a date to be determined.<br />
  Receipt of Platinum Level payment is required in order to be entered in the drawing. An additional fee will be required, if selected.</dd>

  <dt>Are additional tickets available?</dt>
  <dd class="mb-5">Unfortunately, we do have to limit the number of passes for Sponsor Team Members working behind their tables, because we only have a limited number of tickets available in total and we want as many attendees as possible to be able to come visit our amazing sponsors.<br />
  While employees are welcome to purchase tickets at market price and attend the conference as regular attendees; we ask you to be considerate in limiting the number of people you bring to work the event to the number allotted by your sponsorship level.<br />
  We appreciate your consideration in this matter.</dd>
</dl>
{% endif %}

<hr />

**Have a question? Please contact <{{ site.sponsorship_contact_email }}>**

</div>

		</div>
	</div>
</div>

<script src="/js/fslightbox.js"></script>