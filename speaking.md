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
<div class="attention">
{% if site.speaking_cfp_closed %}
<h2 class="center">Call for Presentations for RSS:{{ site.current_year }} has closed</h2>
<p>Thank you to everyone who submitted a proposal! The submission window is now closed.</p>
<p>We appreciate your interest and support — proposal review is underway and submitters will be notified by {{ site.speaking_committee_responses | localtime | date: "%B %e" }}</p>
{% endif %}
</div>
<hr>

## Important Information

- **General Presentation Length: 50 minutes, including Q&A.**
- **Accommodations:** Accepted speakers can reserve a discounted room at the Hyatt, subject to availability.  
- **Admission:** Conference registration is included for all individuals, including backup speakers, whose proposals are accepted. If your CFP submission isn’t selected, you’ll still be eligible to purchase a ticket at the early-bird rate after selection notifications are sent out, even though standard ticket prices will have gone into effect. Admission includes breakfast, lunch and snacks. A speaker ready room is available.
- **Scheduling:** We request speakers be available both days. Talks are scheduled from 8:00 am to 4:30 PM. We cannot guarantee a specific time slot on the schedule.
- **Topic Guidance:** We seek a wide variety of topics. Themes will be adapted based on submissions.
Examples include: AI, Threats and Threat Hunting, Technical Deep Dives, Governance, Risk & Compliance, Business: Adapting to Change, Cloud Security, Ethical Hacking, Security Automation. Additionally, we're actively looking for more technical presentations to help meet attendee demand. Visit [our past events page](/past-events/) to find past schedules and presentation slides. 
- **Vendor Neutrality:**  *Please note that this CFP is separate and distinct from the Sponsorship Track*
  - No company logos, promotional content, or shadow marketing
  - Open Source Software is acceptable as a presentation topic
- **Speaker & Topic Selection:** 
  - Speaker slots are awarded to <u>individuals</u> on the specific abstract submitted and <u>not</u> companies and the decision is final. 
  - Any change to speaker or topic requires committee review and approval and may result in exclusion from the program.
- **Backup Speakers:** 
  - We also identify a pool of backup speakers. These individuals are invited to present in the event of cancellations or to fill additional slots as needed. 
- **Slide Review:** To maintain high-quality, vendor-neutral presentations, the Speaker Committee reviews slides before the conference and may request revisions. <u>A template will be provided by the RSS.</u> All slide decks will be distributed to conference attendees.
- **Speaker Appreciation:** Speakers receive a small gift card and a certificate of appreciation.
<br><br>

Thank you,

*The Rochester Security Summit Speaker Committee*

Contact: <{{ site.speaking_contact_email }}> for more information | Website: <{{ site.baseurl | default: 'https://www.rochestersecurity.org' }}>

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