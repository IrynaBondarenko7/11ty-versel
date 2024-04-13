const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addWatchTarget("css");

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: false,
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
};
