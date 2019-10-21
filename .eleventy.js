module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('app/css');
  eleventyConfig.addPassthroughCopy('app/img');
  eleventyConfig.addPassthroughCopy('app/js');
};
