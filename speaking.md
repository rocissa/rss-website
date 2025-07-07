---
title: Speaking Information
layout: page
---

<hr>
{% if site.speaking_next_year %}
<h2 class="text-center">The RSS:{{ site.next_year }} call for presentations will open in the spring.</h2>
{% endif %}

{% if site.speaking_cfp_not_yet_open %}
<h2 class="text-center">The RSS:{{ site.current_year }} call for presentations is not yet open.</h2>
{% endif %}

{% if site.speaking_cfp_open %}
<div class="speaking">
<h1>Call for Presentations</h1><br>
<h2>The Rochester Security Summit {{ site.current_year }}</h2>
</div>
<hr>

**Conference Dates:** {% daterange site.conference_start_date, site.conference_end_date %} - ( {{ site.conference_start_date | localtime | date: "%A" }} & {{ site.conference_end_date | localtime | date: "%A" }} )

**Location:** The Joseph A. Floreano Rochester Riverside Convention Center

The ISSA Rochester Chapter is excited to announce the Call for Presentations for RSS:{{ site.current_year }}. We invite all those interested in sharing their knowledge and expertise to submit a proposal for consideration by our selection committee.  

Held annually, during National Cyber Security Awareness Month, our conference is a focal point for education and awareness regarding Information Security in Western NY.  Since its inception in 2006, our conference has consistently sold out, featuring a wide range of presentations on various information security topics. Our audience comprises professionals and executives with varied expertise and interests.

**Note on Training Proposals:** We have moved hands-on training to the ISSA Rochester Chapter Meetings and are no longer offering it during RSS to allow for more flexibility to attend talks. To discuss hosting your training session as part of a Chapter Meeting, please contact <{{ site.rocissa_contact_email }}>

We want to hear from you and look forward to seeing you this Fall!

<hr>
<div class="mt-5 text-center">
<p><b>Submissions:</b> To submit a proposal, please use our submission form below</p>
<p><a class="btn btn-primary btn-lg" href="{{ site.speaking_form_url }}" target="_blank">Submit A Proposal</a></p>
<em>Submission deadline: {{ site.speaking_proposals_due | localtime | date: "%B %e, %Y" }}</em>
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

- **General Presentation Length: 50 minutes, including Q&A.** No training sessions will be included this year.
- **Accommodations:** Accepted speakers can reserve a discounted room at the Hyatt, subject to availability.  
- **Admission:**
    - Conference registration is included for all individuals whose proposals are accepted.
    - **If your CFP submission isn’t selected, you’ll still be eligible to purchase a ticket at the early-bird rate after selection notifications are sent out, (by July 31), even though standard ticket prices will have gone into effect.**
    - Admission includes breakfast, lunch and snacks.
    - A speaker ready room is available.
- **Scheduling:** We request speakers be available both days. Talks are scheduled from 8:00 am to 4:30 PM. We cannot guarantee a specific time slot on the schedule.
- **Topic Guidance:** We seek a wide variety of topics. Themes will be adapted based on submissions.
Examples include: AI, Threats and Threat Hunting, Technical Deep Dives, Governance, Risk & Compliance, Business: Adapting to Change, Cloud Security, Ethical Hacking, Security Automation. Additionally, we're actively looking for more technical presentations to help meet attendee demand. Visit [our past events page](/past-events/) to find past schedules and presentation slides. 
- **Vendor Neutrality:**  *Please note that this CFP is separate and distinct from the Sponsorship Track*
  - No company logos or promotional content
  - No shadow marketing
  - Open Source Software is acceptable as a presentation topic
- **Speaker & Topic Selection:** 
  - Speaker slots are awarded to individuals on the specific abstract submitted and not companies and the decision is final. 
  - Any change to speaker or topic requires committee review and approval and may result in exclusion from the program.
- **Backup Speakers:** We also identify a pool of backup speakers. These individuals are invited to present in the event of cancellations or to fill additional slots as needed. 
- **Slide Review:** To maintain high-quality, vendor-neutral presentations, the Speaker Committee reviews slides before the conference and may request revisions.
- **Speaker Appreciation:** Speakers receive a small gift card and a certificate of appreciation.
<br><br>

Thank you,

*The Rochester Security Summit Speaker Committee*

Contact: <{{ site.speaking_contact_email }}> for more information | Website: <{{ site.baseurl | default: 'https://www.rochestersecurity.org' }}>

{% if site.speaking_show_key_dates %}
<hr>

## Key Dates

* {{ site.speaking_cfp_opens | localtime | date: "%B %e" }} &mdash; Call for Proposals Opens

* {{ site.speaking_proposals_due | localtime | date: "%B %e" }} &mdash; Last Day for Accepting Proposal Submissions

* {{ site.speaking_committee_responses | localtime | date: "%B %e" }} &mdash; Speaker notification by this date

* {{ site.speaking_materials_due | localtime | date: "%B %e" }} &mdash; Final program information & draft copy of slides due

* {{ site.speaking_notification_of_slide_changes | localtime | date: "%B %e" }} &mdash; Speaker notification of slide changes by this date

* {{ site.speaking_presentation_due | localtime | date: "%B %e" }} &mdash; Final Copy of Presentation Slides Due (will be made available to attendees post summit)

* <u>**{% daterange site.conference_start_date, site.conference_end_date %} &mdash; The Rochester Security Summit {{ site.current_year }}**</u>
{% endif %}
<hr>