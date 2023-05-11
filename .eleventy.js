const yaml = require("js-yaml");
const {parse} = require("csv-parse/sync");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css")
	eleventyConfig.addPassthroughCopy("fonts")
	eleventyConfig.addPassthroughCopy("images")
	eleventyConfig.addPassthroughCopy("img")
	eleventyConfig.addPassthroughCopy("js")
	eleventyConfig.addPassthroughCopy("*/keynotes/*")
	eleventyConfig.addPassthroughCopy("*/sponsors/*")
	eleventyConfig.addPassthroughCopy("*/files/*")
	eleventyConfig.addPassthroughCopy("*/panel/*")
	eleventyConfig.setWatchJavaScriptDependencies(false)

    // custom markdown filters
    const md = require("markdown-it")({
    	html: true,
    	breaks: false,
    	linkify: false
    });

    // implement Jekyll's markdownify plugin (parse markdown in variables)
	eleventyConfig.addFilter("markdownify", value => (value) ? md.render(value) : '')
	// same as markdownify, but don't wrap result in <p> tags
	eleventyConfig.addFilter("tagless", value => (value) ? md.render(value).slice(3, -4) : '')

	// allow parsng yaml data files
    eleventyConfig.addDataExtension("yaml, yml", contents => yaml.load(contents));

    // allow parsing csv files
    eleventyConfig.addDataExtension("csv", contents => parse(contents, {
        columns: true,
        skip_empty_lines: true
    }))

	return {
		dir: {
			layouts: "_layouts"
	    }
	}
}