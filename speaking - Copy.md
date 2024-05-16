---
title: Speaking
layout: page
---

<hr/>

{% if site.speaking_next_year %}
<h2 class="text-center">The RSS:{{ site.next_year }} call for presentations will open in the spring.</h2>
{% endif %}

{% if site.speaking_cfp_not_yet_open %}
<h2 class="text-center">The RSS:{{ site.current_year }} call for presentations is not yet open.</h2>
{% endif %}

{% if site.speaking_cfp_open %}
<table border="1" style="width:100%">
<tr><td style="width:70%">
<h1>Call for Presentations</h1>
<h2>The Rochester Security Summit {{ site.current_year }}</h2>
</td>
<td style="width:30%">
<a><img src="{{ site.baseurl }}/images/rss-logo.png" alt="Rochester Security Summit" width="200px"></a>
</td></tr></table>

---

**Conference Dates:** {% daterange site.conference_start_date, site.conference_end_date %} - ( {{ site.conference_start_date | date: "%A" }} & {{ site.conference_end_date | date: "%A" }} )

**Location:** The Joseph A. Floreano Rochester Riverside Convention Center

The ISSA Rochester Chapter is excited to announce the Call for Presentations for RSS:{{ site.current_year }}. We invite all those interested in sharing their knowledge and expertise to submit a proposal for consideration by our selection committee.  

Held annually, during National Cyber Security Awareness Month, our conference is a focal point for education and awareness regarding Information Security in Western NY.  Since its inception in 2006, our conference has consistently sold out, featuring a wide range of presentations on various information security topics. Our audience comprises professionals and executives with varied expertise and interests. Please note, we particularly need help meeting the demand for presentations that are technically oriented. 

**Note on Training Proposals:** This year we are moving hands-on training to the ISSA Rochester Chapter Meetings and will not be providing hands-on training during RSS. (We are working on bringing some other exciting alternatives to RSS). To discuss offering a training session during a monthly Chapter Meeting, please
contact <{{ site.rocissa_contact_email }}>

We want to hear from you and look forward to seeing you this Fall!

<div class="mt-5 text-center">
<p><b>Submissions:</b> To submit a proposal, please use our submission form below</p>
<p><a class="btn btn-primary btn-lg" href="{{ site.speaking_form_url }}" target="_blank">Submit A Proposal to the Waitlist</a></p>
Submission deadline: {{ site.speaking_proposals_due | date: "%B %e, %Y" }}
</div>

## Important Information

* **General Presentation Length: 50 minutes, which includes time for questions.**
* **Training:** We are not including training during RSS this year.
* **Accommodations:** Accepted speakers will have the opportunity to reserve a room at the Hyatt at a reduced rate, subject to availability.
* **Admission:** Registration is included upon acceptance. <u>Those who submit a CFP and are not selected will be eligible for tickets at a discounted rate.</u> Admission includes breakfasts, lunches and snacks. Speakers also have access to a speaker ready room. 
* **Scheduling Availability:** Please ensure your availability for both days of the conference. We cannot guarantee a specific speaking time. Presentations typically begin at 8:00 am and end at 4:30 PM, both days. 
* **Topic Guidance:** We seek a wide variety of topics, themes are yet to be determined and will be adapted to fit our submissions. However, some examples are; Threats and Threat Hunting, Technical, Governance, Risk & Compliance, Business: Adapting to Change, Cloud Security, Ethical Hacking, Security Automation.
* **Vendor Neutrality Policy:**  Our Presentations (with the exception of the paid Sponsor Track, organized by the Sponsorship Committee) are Vendor Neutral. This means:
     - No company logos are permitted
	 - No shadow marketing
     - Open Source Software is acceptable as a presentation topic
     - Speaker slots are awarded to individuals and NOT their companies. Once accepted, any changes of speaker or topic are subject to approval by the committee.
* **Slide Review:** In pursuit of upholding the high standards for our presentations that our attendees have come to expect, our Speaker Committee does review slides prior to the conference and may request changes. 
* **Thank You:** We offer a small gift card and certificate of appreciation for our speakers. 


Thank you,

*The Rochester Security Summit Speaker Committee*

Contact: <{{ site.speaking_contact_email }}> for more information | Website: <{{ site.rss_website_url }}>

{% endif %}
{% if site.speaking_cfp_closed %}
<h2 class="center">Speaker submissions for RSS:{{ site.current_year }} have closed</h2>
{% endif %}

{% if site.speaking_show_key_dates %}

## Key Dates

* {{ site.speaking_proposals_due | date: "%B %e" }} &mdash; Last Day for Accepting Proposal Submissions
* {{ site.speaking_committee_responses | date: "%B %e" }} &mdash; Committee will Respond to Proposals
* {{ site.speaking_materials_due | date: "%B %e" }} &mdash; Final Program Abstract & Biography Due & Draft Copy of Presentation Slides Due
* {{ site.speaking_presentation_due | date: "%B %e" }} &mdash; Final Copy of Presentation Slides Due (will be used for distribution to attendees)
* {% daterange site.conference_start_date, site.conference_end_date %} &mdash; The Rochester Security Summit: {{ site.current_year }}
{% endif %}
