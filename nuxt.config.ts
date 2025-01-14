// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/bootstrap/bootstrap.css"],
  app: {
    head: {
      title: "James Badang | Portfolio",
      meta: [
        { name: "author", content: "James Badang" },
        {
          name: "description",
          content:
            "Hello World! I'm an Aspiring Web Developer, I'm constantly expanding my knowledge and eager to contribute my skills and looking forward to use my programming skills for the growth of the organization and myself.",
        },
        { property: "og:title", content: "James Badang | Portfolio" },
        { property: "og:type", content: "Portfolio Site" },
        {
          property: "og:url",
          content: "https://jbportfolio-blog.netlify.app/",
        },
        {
          property: "og:description",
          content:
            "Hello World! I'm an Aspiring Web Developer, I'm constantly expanding my knowledge and eager to contribute my skills and looking forward to use my programming skills for the growth of the organization and myself.",
        },
      ],
      link: [
        { rel: "canonical", href: "https://jbportfolio-blog.netlify.app/" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
        },
      ],
    },
  },
});
