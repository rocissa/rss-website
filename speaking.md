---
title: Speaking
layout: page
---

{% if site.speaking_next_year %}
<h2 class="text-center">The RSS:{{ site.next_year }} call for presentations will open in the spring.</h2>
{% endif %}

{% if site.speaking_cfp_not_yet_open %}
<h2 class="text-center">The RSS:{{ site.current_year }} call for presentations is not yet open.</h2>
{% endif %}

{% if site.speaking_cfp_open %}
## RSS:{{ site.current_year }} Call for Presentations Has Closed

**Conference Dates:** October 25 & 26, 2023 - (Wednesday & Thursday)<br>
**Location:** The Joseph A. Floreano Rochester Riverside Convention Center

The ISSA Rochester Chapter is excited to announce the Call for Presentations for RSS:2023. We invite all those interested in sharing their knowledge and expertise to submit a proposal for consideration by our selection committee.  

Held during National Cyber Security Awareness Month, our conference is a focal point for education and awareness regarding Information Security in Western NY.  We seek presentations on a broad range of infosec topics, as we have a broad range of professionals and executives in attendance. Please note, we particularly need help meeting the demand for presentations that are technically oriented. Proposals regarding potential training sessions are also welcome!

With the exception of  2020-21, RSS has taken place annually since 2006 and has typically been a sell-out event as a result of collaboration with all of our outstanding partners.  We want to hear from you and we look forward to seeing you this Fall! 


<div class="mt-5 text-center"><a class="btn btn-primary btn-lg" href="https://docs.google.com/forms/d/1q5SGkXUgSxv9o9Chra_4dWhxLQu-_KpGDDjwRtRe7tY/" target="_blank">Submit A Proposal to the Waitlist</a><br>
Submission deadline: August 15, 2023</div>

### Important Information: 

* General Presentation Session Length: 50 minutes (please allow time for questions in this window)
* Standard Training Length: typically 2 or 4 hours (please specify length in form submission)
* **Accommodations:** Selected speakers will have the opportunity to reserve a room at the Hyatt at a reduced rate (availability limited.) Unfortunately, we are unable to cover travel & lodging costs for speakers. 
* **Admission:** Registration is included upon acceptance. Speakers also have access to a private speaker room and their registration will be taken care of by conference staff. Those who submit a CFP and are not selected will be eligible for tickets at a discounted rate. 
* **Scheduling Availability:** Please check your availability for both days of the conference. The first general session typically opens at 8:00 am and the last ends at 4:30 PM, both days. 
* **Track Information:** While this year’s tracks are yet to be determined and are adapted to fit our submissions, some examples from past years are; Threats and Threat Hunting, Technical Track, Interactive Education, Business: Governance, Risk & Compliance, Business: Adapting to Change, Hands-On Training.
* **Vendor Neutrality Policy:**  Our Presentations (with the exception of the paid Sponsor Track, organized by the Sponsorship Committee) are Vendor Neutral.
  * No company logos
  * No deep dives into proprietary software
  * Open Source Software is acceptable as a presentation topic
  * Speaker slots are awarded to individuals and NOT their companies. Any changes to a speaker or topic, post acceptance, must be submitted for approval by the committee.
* **Slide Review:** In pursuit of upholding the high standards for our presentations that our attendees have come to expect, our Speaker Committee does review slides and may request changes. 
* **Thank You:** Speakers will receive a small gift card and certificate in appreciation of your participation. 

Thank you,  
The Rochester Security Summit Speaker Committee

Please contact [speaker@rochestersecurity.org](mailto:speaker@rochestersecurity.org) for more information.


### Key Dates:

* August 15 - Last Day for Accepting Proposal Submissions
* Early September  - Committee will Respond to Proposals 
* September 22  - Final Program Abstract & Biography Due + Draft Copy of Presentation Slides due
* October 6  - Final Copy of Presentation Slides due (will be used for distribution to attendees)
* October 25 & 26 - The Rochester Security Summit: 2023

{% endif %}

{% if site.speaking_cfp_closed %}
<h2 class="center">Speaker submissions for RSS:{{ site.current_year }} have closed.</h2>
{% endif %}

{% if site.speaking_show_guidelines %}
### Notes and Guidelines

* Presentation Length: 50 minutes (please include time for questions)
* Training Length: typically 2 or 4 hours (please specify length in form submission)
* To our most valued Sponsors and other companies: Please note that submissions to this call for presentations are accepted from, and awarded to, individuals and not companies. Any changes to topic or speaker necessitates, and is subject to, review and re-approval by the Speaker Committee. While sponsor participation is a valued part of our conference, we do not allow marketing or sales content within our standard presentation tracks. (When it becomes available, more information for participating sponsors will be posted to our [sponsorship page](/sponsorship)).
* Due to the ongoing nature of the pandemic, we may be accepting fewer speakers this year than in previous years. We also expect a reduced number of attendees and sponsors.
{% endif %}

{% if site.speaking_show_key_dates %}
### Key Dates

* {{ site.speaking_proposals_due | date: "%B %e" }} &emdash; Last day for accepting proposal submissions
* {{ site.speaking_committee_responses | date: "%B %e" }} &emdash; Committee will respond to proposals
* {{ site.speaking_materials_due | date: "%B %e" }} &emdash; Final program abstract, biography, and draft copy of presentation slides due
* {{ site.speaking_presentation_due | date: "%B %e" }} &emdash; Final copy of presentation slides due (will be used for distribution to attendees)
{% endif %}
