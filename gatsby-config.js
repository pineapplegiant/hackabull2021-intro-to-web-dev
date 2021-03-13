module.exports = {
  siteMetadata: {
    title: "Hackabull 2021 Intro to Web Dev",
    subtitle: "",
    description:
      "A gentle introduction to coding for the web",
    keywords: [
      "Hackathon",
      "Hackabull",
      "Web Development",
      "Code"
    ]
  },
  pathPrefix: "/hackabull2021-intro-to-web-dev",
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
