const yaml = require("js-yaml");
const {parse} = require("csv-parse/sync");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css")
	eleventyConfig.addPassthroughCopy("fonts")
	eleventyConfig.addPassthroughCopy("images")
	eleventyConfig.addPassthroughCopy("img")
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
		'png'
	]);

    // custom markdown filters
    const md = require("markdown-it")({
    	html: true,
    	breaks: false,
    	linkify: false
    });

    // implement Jekyll's markdownify plugin (parse markdown in variables)
	eleventyConfig.addFilter("markdownify", value => (value) ? md.render(value) : '')
	

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