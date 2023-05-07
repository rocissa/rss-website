---
title: Speaking
layout: page
---

{% if site.speaking_cfp_not_yet_open %}
<h2 class="center">The RSS:{{ site.current_year }} call for presentations is not yet open.</h2>h2>
{% endif %}

{% if site.speaking_cfp_open %}
## RSS:{{ site.current_year }} Call for Presentations

**Conference Dates:** {{ site.start_date | date: "%B %e" }} - {{ site.end_date | date: "%B %e"  }}<br>
**Location:** The Joseph A. Floreano Rochester Riverside Convention Center

Held during National Cyber Security Awareness Month, our conference is a focal point for education and awareness regarding Information Security in Western NY.  We seek presentations on a broad range of infosec topics, as we have a broad range of professionals and executives in attendance. Please note, we particularly need help meeting the demand for presentations that are technically oriented. Proposals regarding potential training sessions are also welcome!

With the exception of the past few years, RSS has taken place annually since 2006 and has typically been a sell-out event as a result of collaboration with all of our outstanding partners.  We want to hear from you and we look forward to seeing you this Fall!

<div class="mt-5 text-center"><a class="btn btn-primary btn-lg" href="https://docs.google.com/forms/d/e/1FAIpQLSdVY0yJvUorvdMXMqBECS3-gDqqRb38BVqItt-f8u5LxZD0eQ/viewform" target="_blank">Submit A Proposal</a><br>
Submission deadline: {{ site.speaking_proposals_due | date: "%B %e, %Y"}}</div>

Thank you,<br>
The Rochester Security Summit Speaker Committee

Please contact [speaker@rochestersecurity.org](mailto:speaker@rochestersecurity.org) for more information.
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
