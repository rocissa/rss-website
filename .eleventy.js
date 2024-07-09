const yaml = require("js-yaml")
const {parse} = require("csv-parse/sync")
const markdownItAttrs = require('markdown-it-attrs')
const faviconsPlugin = require("eleventy-plugin-gen-favicons")
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster')
const strftime = require('strftime')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css")
	eleventyConfig.addPassthroughCopy("fonts")
	eleventyConfig.addPassthroughCopy("images")
	//eleventyConfig.addPassthroughCopy("img")
	eleventyConfig.addPassthroughCopy("js")
	eleventyConfig.addPassthroughCopy("*/keynotes/*")
	// This causes the _data/sponsors csv files to get copied
	// Image files should instead get copied by the setTemplateFormats definition below
	//eleventyConfig.addPassthroughCopy("*/sponsors/*")
	eleventyConfig.addPassthroughCopy("*/files/*")
	eleventyConfig.addPassthroughCopy("*/panel/*")
	eleventyConfig.setWatchJavaScriptDependencies(false)

	eleventyConfig.setTemplateFormats([
		'md',
		'jpg',
		'jpeg',
		'png',
		'pdf'
	])

    // custom markdown filters
    const md = require("markdown-it")({
    	html: true,
    	breaks: false,
    	linkify: true
    }).use(markdownItAttrs)
    eleventyConfig.setLibrary("md", md)

    // implement Jekyll's markdownify plugin (parse markdown in variables)
	eleventyConfig.addFilter("markdownify", value => (value) ? md.render(value) : '')

	// dates without a timezone are assumed to be in UTC which causes them to be off by a day
    // when displayed on the site.  This adjusts the timestamps to factor in the local timezone.
    eleventyConfig.addFilter("localtime", value => {
        let date = new Date(value)
        let tz = date.getTimezoneOffset()
        let newdate = new Date(date.getTime() + (tz * 60000))
        return newdate
    })

	// allow parsing yaml data files
    eleventyConfig.addDataExtension("yaml, yml", contents => yaml.load(contents));

    // allow parsing csv files
    eleventyConfig.addDataExtension("csv", contents => parse(contents, {
        columns: true,
        skip_empty_lines: true
    }))

    eleventyConfig.addPlugin(faviconsPlugin, {
    	manifestData: {
    		name: "Rochester Security Summit",
    		short_name: "RSS"
    	}
    })

    eleventyConfig.addPlugin(cacheBuster({
    	outputDirectory: "./_site"
    }))

    /**
     * Format a range of dates in longform English format
     */
    eleventyConfig.addShortcode("daterange", function (start, end) {
        let startDate = new Date(start)
        let endDate = new Date(end)

        let tz = startDate.getTimezoneOffset()
        startDate = new Date(startDate.getTime() + (tz * 60000))
        endDate = new Date(endDate.getTime() + (tz * 60000))


        if(startDate == endDate) {
            // single day
            return strftime("%B %e, %Y", startDate)
        }
        else if(startDate.getFullYear() != endDate.getFullYear() || startDate.getMonth() != endDate.getMonth()) {
            // in different years or months? return two full dates
            return strftime("%B %e, %Y", startDate) + " - " + strftime("%B %e, %Y", endDate)
        }

        // return month day-day, year
        let month = strftime("%B", startDate)
        let year = strftime("%Y", startDate)
        return month + " " + startDate.getDate() + " - " + endDate.getDate() + ", " + year
    })
	
	/**
     * Display row of options for past event year specified
     */
    eleventyConfig.addShortcode("pastyear", function (year) {
        let keynoteDIR = "/" + year + "/keynotes"
        let presentationDIR = "/" + year + "/files"
		let sponsorDIR = "/" + year + "/sponsors"

		let keynoteHREF = keynoteDIR
		// let anchorText = "<a href=\"" + keynoteHREF + "\"data-fslightbox=\"gallery\"><img src=\"/2022/attendees-by-job-function.png" class="img-responsive" alt="Attendee Profiles by Job Function in 2022 (N=338)"></a>

        return keynoteDIR
    })

	return {
		dir: {
			layouts: "_layouts"
	    }
	}
}