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
<div class="attention">
<h2 class="text-center">The official Call for Sponsors for RSS:{{ site.current_year }} is now open</h2>
<p><em>To enter the lottery for a slot, please complete and submit the Call For Sponsors Form</em></p>
</div>
<div class="mt-5 mb-5 text-center"><a class="btn btn-primary btn-lg" href="{{ site.sponsorship_form_url }}" target="_blank">Submit Call For Sponsors Form</a></div>
<hr>

## Important Dates

* Call for Sponsors Deadline: <b>{{ site.sponsorship_applications_due | localtime | date: "%B %e, %Y" }}</b>

  *Submit a completed form using the link above by this date to be considered*
  
* RSS:{{ site.current_year }} takes place on {% daterange site.conference_start_date, site.conference_end_date %}
{% endif %}
{% if site.sponsorship_waiting_list == true %}
<hr>
<div class="attention">
<h2 class="text-center">Sponsorship for RSS:{{ site.current_year }} is currently closed
<p><em>Please consider joining our waitlist</em></p>
</div>

> Thank you for considering Sponsorship at RSS:{{ site.current_year }}. We are currently at capacity for RSS:{{ site.current_year }}
>
> Please complete this form to be added to the waitlist for {{ site.current_year }}. You’re encouraged to add multiple emails, including team/DL emails to ensure relevant parties are notified.

<div class="mt-5 mb-5 text-center"><a class="btn btn-primary btn-lg" href="{{ site.sponsorship_form_url }}" target="_blank">Submit Form To Waitlist</a></div>
{% endif %}
{% if site.sponsorship_pricing %}
<hr>

## Sponsor Level Benefits & Pricing

* The information below describes Rochester Security Summit sponsorship opportunities for this year

   *Click anywhere in the image to download*

<div class="mt-5 mb-5 text-left"><a href="/files/RSS{{ site.current_year }}-Sponsorship-Pricing.pdf"><img id="sponsorship-pricing" src="/files/RSS{{ site.current_year }}-Sponsorship-Pricing.png" alt="Sponsorship Pricing Thumbnail" width="700px" style></a></div>
{% endif %}
{% if site.sponsorship_open %}
<hr>

## About the Selection Process

> Due to limited space, sponsorships are allocated through a lottery system. By submitting this form, your company will be entered into a random drawing, and sponsorships will be awarded based on the order drawn. There is no deposit required to enter the drawing, and organizations can withdraw from consideration at any time.
>
> We will do our best to match your indicated preferences with our available sponsorship opportunities. If selected, you will be notified and invoiced via email (payment is due upon receipt). Paying the invoice will officially confirm your sponsorship spot.
>
> The selection of the Diamond sponsor is exclusive to committed Platinum Sponsors who have shown interest in the Diamond level. The Diamond Sponsor will be chosen through a second random drawing and will secure the spot by making an additional payment.
>
> After the lottery, we will maintain a waitlist for any dropouts or cancellations.
>
> Thank you for considering sponsoring the Rochester Security Summit. We appreciate your interest and support in making our event a success.

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
<p class="text-center"><em>The Summit has excellent representation across industries and job functions. In 2023, the profile of paid Summit attendees who provided their data was as follows:</em></p>
<div class="container">
  <div class="row">
    <div class="col-md-6">
	<h3>Attendee Profiles by Industry in 2023</h3>
	<a href="/2023/attendees-by-industry.png" data-fslightbox="gallery"><img src="/2023/attendees-by-industry.png" class="img-responsive" alt="Attendee Profiles by Industry in 2023 (N=362)"></a><br>
    </div>
    <div class="col-md-6">
	<h3>Attendee Profiles by Job Function in 2023</h3>
	<a href="/2023/attendees-by-job-function.png" data-fslightbox="gallery"><img src="/2023/attendees-by-job-function.png" class="img-responsive" alt="Attendee Profiles by Job Function in 2023 (N=342)"></a><br>
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

**Have a sponsorship question? Please contact us at <{{ site.sponsorship_contact_email }}>**

</div>

		</div>
	</div>
</div>

<script src="/js/fslightbox.js"></script>
