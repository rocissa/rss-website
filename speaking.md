---
title: Speaking Information
layout: page
---

<hr>
{% if site.speaking_next_year %}
<h2 class="text-center">The RSS:{{ site.next_year }} call for presentations will open in the spring.</h2>
{% endif %}
{%- if site.speaking_cfp_not_yet_open -%}
{%- if site.speaking_cfp_publish_open_date == true -%}
	<section id="attention" class="attention">
		<div>
		<h2>The RSS:{{ site.current_year }} Call for Presentations will open {{ site.speaking_cfp_opens | localtime | date: "%B %e, %Y" }}</h2>
		<p>If your CFP submission is not selected, you will still be eligible to purchase a ticket at the early-bird rate after selection notifications are sent out, (by {{ site.speaking_committee_responses | localtime | date: "%B %e" }}), even though standard ticket prices will have gone into effect.</p>
		<p><em>Keep an eye on this space for updates!</em></p>
		</div>
	</section>
{%- else -%}
	<section id="attention" class="attention">
		<div>
		<h2 class="text-center">The RSS:{{ site.current_year }} call for presentations is not yet open.</h2>
		</div>
	</section>
{%- endif -%}
{%- endif -%}
{% if site.speaking_cfp_open %}
<div class="speaking">
<h1>Call for Presentations</h1><br>
<img src="/images/rss-logo.png" alt="Rochester Security Summit logo"/><br>
<h2>The Rochester Security Summit {{ site.current_year }}</h2>
</div>
<hr>

**Conference Dates:** {% daterange site.conference_start_date, site.conference_end_date %} - ( {{ site.conference_start_date | localtime | date: "%A" }} & {{ site.conference_end_date | localtime | date: "%A" }} )

**Location:** The Joseph A. Floreano Rochester Riverside Convention Center

**Celebrating 20 Years of Security, Community, and Insight!**

The ISSA Rochester Chapter is thrilled to open the Call for Presentations for RSS:2026, marking the 20th anniversary of the Rochester Security Summit. We invite all those interested in sharing their knowledge and expertise to submit a proposal for consideration by our selection committee.

Held every October during National Cyber Security Awareness Month, RSS has become a premier InfoSec conference in Western NY - bringing together professionals, practitioners and executives from across the region. Since our first event in 2006, the Summit has consistently sold out, offering engaging, practical and forward-thinking presentations on a wide range of security topics. 

**Empowering New Voices:** We are thrilled to introduce a new track dedicated to the next generation of security professionals. If you are a college senior, a graduate student, or a first-time speaker, we welcome your perspective! Please select the "Emerging Voices" track on your submission form. Note that while this track is tailored for newcomers, all proposals undergo our standard evaluation process. 

If you have insights, experience or research to share, we invite you to submit a proposal for consideration by our selection committee. Visit <{{ site.baseurl | default: 'https://www.rochestersecurity.org' }}> to learn more and help us make this milestone year our best yet. 
<hr>
<div class="mt-5 text-center">
<p><b>Submissions:</b> To submit a proposal, please use our submission form below</p>
<p><a class="btn btn-primary btn-lg" href="{{ site.speaking_form_url }}" target="_blank">Submit A Proposal</a></p>
<em><b>Submission deadline:</b> {{ site.speaking_proposals_due | localtime | date: "%B %e, %Y" }}</em>
</div>
{% endif %}
{% if site.speaking_cfp_closed %}
<div class="attention">
<h2 class="center">Call for Presentations for RSS:{{ site.current_year }} has closed</h2>
<p>Thank you to everyone who submitted a proposal! The submission window is now closed.</p>
<p>We appreciate your interest and support — proposal review is underway and submitters will be notified by {{ site.speaking_committee_responses | localtime | date: "%B %e" }}</p>
</div>
{% endif %}
<hr>

>
> ## RSS Speaker Guidelines
>
> Ensure all presentations are educational, high-quality, vendor-neutral, and accessible to large audiences in professional conference settings. Deliver clear, insight-driven content that
prioritizes audience value over promotion.
>
> Slides are reviewed by the Speaker Committee before the conference to verify neutrality, clarity, non-promotional tone, and all other requirements. Logos are allowed only on introduction and closing slides. Remove all other corporate branding including watermarks, branded backgrounds, repeating logos, and classifications.  Do not include product pitches or sales messaging. Presentations must remain vendor-neutral and educational.  Speakers may be asked to make revisions to meet the required standards.  All Speaker Committee decisions are final.  
>
> The following guidelines are for non-Vendor Track presentations and demonstrations.
> 
> #### Content Expectations
>
> - Deliver original insights or real-world experience
> - Provide actionable, practical guidance
> - Tailor for a knowledgeable, professional audience
> - Avoid overly basic, generic, or promotional material 
>
> #### Slide Design & Readability
>
> - Final slides must use the provided RSS Template.  This ensures visual consistency, recording compatibility, and accessibility compliance.
> - Format must be 16:9, widescreen
> - Titles: 36–44 pt (minimum 32 pt)
> - Body Text: 24–32 pt (minimum 24 pt)
> - Captions/Data: 18–24 pt (absolute minimum 16 pt)
> - Avoid dense text, clutter, and excessive animations
> - The approved RSS Font is Archivo (https://fonts.google.com/specimen/Archivo). Fonts are embedded within the RSS PowerPoint template.
> - Submit your final slides with the following naming convention, “RSS_2026_LastName_Topic”
>
> #### Technical & Delivery Standards
>
> - Inform the RSS team ASAP if audio, live video, and/or Internet connectivity is required
> - If live demonstrations are planned:
>   - Pre-session testing is required to ensure screen sharing, virtual machines, and/or videos display correctly. Arrive at the assigned presentation room at least 15 minutes before your session to conduct the necessary testing.
>   - Include screenshots within slide deck for an effective takeaways
>   - Prepare video recordings to use as backups
> - Test slides on a standard presentation setup (16:9, HDMI)
> - All links and references must be verified upon submission and again 1-day before scheduled delivery
> - Stay within allotted time of 50 minutes which includes time for Q&A
>
> #### Legal & Compliance
>
> - Use only licensed or approved content
> - Do not include confidential or sensitive information
> - Assume slides may be photographed, recorded, and shared publicly
> - If required, a single copyright and/or disclosure slide is acceptable as the final slide in the presentation.
>
> #### Final Checklist
>
> - Official template used (16:9)
> - Fonts ≥ 24 pt; slides readable
> - No branding, watermarks, or sales content
> - Clear structure and flow
> - Actionable takeaways included
> - Content matches approved abstract
> - No sensitive or unlicensed material
> - Slides tested and presentation timed
>
>
> Thank you,
>
> *The Rochester Security Summit Speaker Committee*
> 
> Contact: <{{ site.speaking_contact_email }}> for more information | Website: <{{ site.baseurl | default: 'https://www.rochestersecurity.org' }}>
>

{% if site.speaking_show_key_dates %}
<hr>

## Key Dates

* {{ site.speaking_cfp_opens | localtime | date: "%B %e" }} &mdash; Call for Presentations Opens

* {{ site.speaking_proposals_due | localtime | date: "%B %e" }} &mdash; Last Day for Accepting Proposal Submissions

* {{ site.speaking_committee_responses | localtime | date: "%B %e" }} &mdash; Speaker notification on or before this date

* {{ site.speaking_abstract_bio_due | localtime | date: "%B %e" }} &mdash; Final program abstract & bio due

* {{ site.speaking_draft_slides_due | localtime | date: "%B %e" }} &mdash; Draft copy of slides due

* {{ site.speaking_presentation_due | localtime | date: "%B %e" }} &mdash; Final copy of presentation slides due (All slide decks will be distributed to conference attendees post conference.)

* <u>**{% daterange site.conference_start_date, site.conference_end_date %} &mdash; The Rochester Security Summit {{ site.current_year }}**</u>
{% endif %}
<hr>