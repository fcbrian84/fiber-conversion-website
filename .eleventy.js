module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Convert YouTube/Vimeo URLs to embeddable iframe URLs
  eleventyConfig.addFilter("videoEmbed", function(url) {
    if (!url) return url;
    // YouTube: youtube.com/watch?v=ID or youtu.be/ID
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?#]+)/);
    if (ytMatch) return "https://www.youtube.com/embed/" + ytMatch[1];
    // Vimeo: vimeo.com/ID
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return "https://player.vimeo.com/video/" + vimeoMatch[1];
    return url;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
