---
title: Sponsorship Information
layout: page
---
<div class="mt-5 mb-5 text-center">
{% if site.sponsorship_show_w9_link == true %}
<a class="btn btn-lg btn-primary" href="/files/w9.pdf">W-9 (PDF)</a>
{% endif %}

{% if site.sponsorship_next_year == true %}
<h2 class="text-center">Sponsorship information for RSS:{{ site.next_year }} will be available this spring</h2>
<div><a class="btn btn-primary btn-lg" href="/sponsor-mailing-list" target="_blank">Join Our Sponsorship Mailing List</a></div>

{% endif %}

{% if site.sponsorship_not_yet_open == true %}
## Sponsorship Not Yet Open
{% endif %}

{% if site.sponsorship_coming_soon == true %}o submit for a Platinum slot,
<div class="attention">
<h2>Sponsorship Opportunities Coming Soon!</h2>
<p><em>Keep an eye on this space for updates and join our mailing list when it is open!</em><p>
</div>
{% if site.sponsorship_mailing_list_open == true %}
<div><a class="btn btn-primary btn-lg" href="/sponsor-mailing-list" target="_blank">Join Our Sponsorship Mailing List</a></div>
{% endif %}
{% if site.speaking_cfp_open == true %}
<div class="block-text">
<p>While we finalize the details for opening sponsorship, we would like to inform you that our Call for Presentations is now open. If you are interested in submitting presentation for consideration, we invite you to visit our submission portal at <a href="{{ site.speaking_page_url }}">{{ site.speaking_page_url }}</a>, where you will find detailed instructions and a form to submit your proposal.</p><br>
<p class="text-center"><em>Thank you for your continued interest in RSS:{{ site.current_year }}</em></p>
{% endif %}
</div>
{% endif %}

{% if site.sponsorship_open  == true %}
<div class="attention">
<h2>The official Call for Sponsors for RSS:{{ site.current_year }} is now open</h2>
<h3>RSS:2025 is only accepting Platinum sponsors at this time</h3>
<h4>To submit for a Platinum slot, please complete the Call For Sponsors Form below</h4>
</div>

<div class="text-left" style="margin-top: 3em;">
We are excited to announce that the Call for Sponsors for the Rochester Security Summit 2025 (RSS:2025) is officially open!

#### Event Details

> Conference Dates: October 8 & 9, 2025 (Wednesday & Thursday)
>
> Location: The Joseph A. Floreano Rochester Riverside Convention Center

#### How to Apply

To request a place in the sponsorship lottery for RSS:2025, please complete and submit the Call for Sponsors Form by April 15th, 2025.

<div class="mt-5 mb-5 text-center"><a class="btn btn-primary btn-lg" href="{{ site.sponsorship_form_url }}" target="_blank">Submit Call for Sponsors Form</a></div>

Please see our Sponsorship Pricing & Benefits Sheet below, which will help you determine which level of sponsorship suits your needs. We encourage you to review this information carefully to select the level that best fits your goals.

#### Sponsorship Selection Process

Sponsors are selected by lottery. The drawing will take place on April 17th, 2025, and only those who have submitted a completed form by the deadline will be considered.

If a selected sponsor is unable to participate, we will draw an alternate from the remaining wait-listed entries.

#### Exclusive Diamond Sponsorship

To be considered for the Diamond Sponsorship, you must first be selected and commit to a Platinum Level Sponsorship. If you are interested in the Diamond Sponsorship, please indicate your interest by checking the box on the sponsorship form. The Diamond Sponsor drawing is exclusive to Platinum Sponsors who have completed payment and will take place at a later date.

#### Payment Details

Once you have been selected as a sponsor, you will receive an email notification along with a separate **invoice from Stripe**. When a payment is successful, Stripe will issue you a receipt.

**Payment is due upon receipt** of the invoice. Please note that your sponsorship slot is **not officially secured until payment has been received**.

Additionally, **booth choice** is influenced by a combination of your **Sponsorship Level** and the **date your payment is received**. Early payment can improve your chances of securing your preferred booth location and, for Platinum sponsors, your preferred time slot for the Sponsor Track presentation.
</div>
<hr>
<div class="attention">

**Please see our [Sponsorship FAQ]({{ site.baseurl }}/sponsorship-faq) for answers to your sponsorship questions**
</div>
{% endif %}
{% if site.sponsorship_sold_out == true %}
<div class="attention">
<h2 class="text-center">Sponsorship for RSS:{{ site.current_year }} has sold out.</h2>
</div>

> If you would like to be contacted about future opportunities, please register your email address below. Thank you for your interest.

<div class="text-center"><a class="btn btn-primary btn-lg" href="/sponsor-mailing-list" target="_blank">Join Our Sponsorship Mailing List</a></div>
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
<div class="text-left">

## Sponsor Level Benefits & Pricing

</div>

    ***Click anywhere in the following image to download the PDF***

<div class="mt-5 mb-5 text-left"><a href="/files/RSS{{ site.current_year }}-Sponsorship-Pricing.pdf"><img id="sponsorship-pricing" src="/files/RSS{{ site.current_year }}-Sponsorship-Pricing.png" alt="Sponsorship Pricing Thumbnail" width="900px" style></a></div>
{% endif %}
{% if site.sponsorship_open %}
<hr>
<div class="text-left" style="margin-top: 3em;">

## About the Selection Process
>
> Due to limited space, sponsorships are allocated through a lottery system. By submitting this form, your company will be entered into a random drawing, and sponsorships will be awarded based on the order drawn. There is no deposit required to enter the drawing, and organizations can withdraw from consideration at any time.
>
> We will do our best to match your indicated preferences with our available sponsorship opportunities. If selected, you will be notified and invoiced via email (payment is due upon receipt). Paying the invoice will officially confirm your sponsorship spot.
>
> The selection of the Diamond sponsor is exclusive to committed Platinum Sponsors who have shown interest in the Diamond level. The Diamond Sponsor will be chosen through a second random drawing and will secure the spot by making an additional payment.
>
> After the lottery, we will maintain a waitlist for any dropouts or cancellations.
>
> Thank you for considering sponsoring the Rochester Security Summit. We appreciate your interest and support in making our event a success.
>
</div>
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
<p class="text-center"><em>The Summit has excellent representation across industries and job functions. In {{ site.previous_year }}, the profile of paid Summit attendees who provided their data was as follows:</em></p>
<div class="container">
  <div class="row">
    <div class="col-md-6">
	<h3>Attendee Profiles by Industry in {{ site.previous_year }}</h3>
	<a href="/{{ site.previous_year }}/attendees-by-industry.png" data-fslightbox="gallery"><img src="/{{ site.previous_year }}/attendees-by-industry.png" class="img-responsive" alt="Attendee Profiles by Industry in {{ site.previous_year }} (N=353)"></a><br>
    </div>
    <div class="col-md-6">
	<h3>Attendee Profiles by Job Function in {{ site.previous_year }}</h3>
	<a href="/{{ site.previous_year }}/attendees-by-job-function.png" data-fslightbox="gallery"><img src="/{{ site.previous_year }}/attendees-by-job-function.png" class="img-responsive" alt="Attendee Profiles by Job Function in {{ site.previous_year }} (N=343)"></a><br>
    </div>
  </div>
</div>
</div>
{% endif %}
{% if site.sponsorship_show_booth_map == true %}
<hr />

## Booth Map
<div class="text-left">

>
> Please see the following booth map for reference when selecting preferences.
>
> ***Click anywhere in the following image to download the PDF***

<div id="booth-map" class="mt-5 mb-5 text-left"><a href="/files/RSS{{ site.current_year }}-Booth-Map.pdf"><img id="sponsorship-booth-map" src="/files/RSS{{ site.current_year }}-Booth-Map.png" alt="Booth Map" width="900px" style></a></div>
<br>
</div>
{% endif %}
<hr />
{% if site.sponsorship_faq == true %}

## Frequently Asked Questions
<div class="text-left">

>
> Please see our [Sponsorship FAQ]({{ site.baseurl }}/sponsorship-faq) for answers to your sponsorship questions
>
> **Have more sponsorship questions? Contact us at <{{ site.sponsorship_contact_email }}>**
>
<br>
</div>

{% endif %}
<hr />
</div>

		</div>
	</div>
</div>

<script src="/js/fslightbox.js"></script>
