# rss-website
Jekyll-based website for Rochester Security Summit

## Building The Site

* After cloning the repository, run ```npm init``` to install the NodeJS dependencies.
* To build the site run ```npx @11ty/eleventy```
* To build the site and serve it locally, run ```npx @11ty/eleventy --serve```.  Eleventy will watch for changes and automatically build them when the server is running.


## Adding a Conference

1. Create a file in the ```_conferences``` directory named ```YEAR.md```.  Use the following template:
        
        ---
        year: the conference year
        theme: the conference theme (omit line if there is no theme)
        permalink: /YEAR/index.html
        ---
        Include any conference specific content here.  It will appear between the keynotes and sponsors on the past events page.

1. Create a new directory in the root of the project, named for the conference year.
1. Create two directories inside the new directory, ```keynotes``` and ```sponsors```.
1. Copy photos for keynote speakers into ```keynotes```.
1. Create a file in ```_keynotes``` for each keynote speaker.
   
    * Name the file ```YEAR-SPEAKER-NAME.md```
    * Use the following as a template:
        
        ```
        ---
        name: the speaker's full name
        year: the conference year
        photo: the filename of the photo in ```YEAR/keynotes``` (no path needed)
        intro: >-
            The introduction to the speaker's bio for the homepage.

            Multiple lines are allowed
        permalink: YEAR/SPEAKER-NAME
        weight: 1 <-- bios will be arranged on the homepage and conference page based on this value, lower values first
        more_link: true <-- if true, a link to the bio page will be included in the homepage summary
        ---
        Speaker's full bio goes here (for the bio page)
        ```
        
1. Copy sponsor logos into ```sponsors```.
1. Create a new file named ```YEAR.csv``` in ```_data/sponsors```.  Add the following as the first line of this file (note: case is impportant):

       Year,Level,Name,Image,Link
       
1. Add a new line to ```_data/sponsors/YEAR.csv``` for each sponsor.  File is a CSV with the following columns:
   
   * Conference Year
   * Sponsorship Level - sponsors should be listed in the order they should appear on the site, grouped by level
   * Sponsor Name - used as alt text for the logo image
   * Image Filename - the filename of the image in ```YEAR/sponsors``` (no path needed)
   * Link URL - the URL to the sponsor's site

1. Additional conference content, such as presesntation slides, should be placed in the directory for the conference year.  Additional pages can be created by adding markdown files within the directory. 
1. Update settings in ```_data/site.yml``` as appropriate:
    * Change ```current_year``` and ```previous_year```
    * Update ```conference_start_date``` and ```conference_end_date``` if new dates are known
    * Update other settings to turn on and off messaging where needed