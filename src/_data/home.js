/*
 * This is the "content file" for the home page, which is rendered via index.njk.
 *
 * (2024-06-27) This is actually a global data file, which is weird: I think it ought to be a
 * markdown file with the various fields as front matter properties, just like a normal blog post
 * is. However, I haven't yet learned enough about 11ty to understand how to refactor it, so it's
 * staying like this for now. If we ever change it, it should also be made editable via the CMS
 * (if it's not already).
 */
module.exports = {
  title: 'Andrew Brandon',
  image: 'src/assets/img/drbr-landing-pic.jpg',
  image_alt: 'Picture of Andrew',

  /** The body is parsed as markdown, then pasted into the "hero" section of the template */
  body: `I am a software developer and musician based in Seattle. I also exist on the web at:

- [LinkedIn](https://linkedin.com/in/andrewbr)
- [GitHub](https://github.com/drbr)
- [YouTube](https://www.youtube.com/channel/UCWirpxy8CTB5c4wauyzbFhA)
- [Software engineering blog](https://drbr.dev)
- [Recipes](https://www.pepperandoliveoil.com/)
`,
};
