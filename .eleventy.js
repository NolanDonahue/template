const { DateTime } = require("luxon");

// Tell eleventy where the front facing files are going to be
module.exports = function (eleventyConfig) {
  //Grab the files for eleventy to take and pass through to the public folder
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src", //Change this for where the input files are
      output: "public", //This can also be changed
    },
  };
};
