require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Josh Park`,
    siteTitleAlt: `Josh Park`,
    siteHeadline: `Personal Website`,
    siteDescription: `Personal website with my aricles and projects`,
    siteLanguage: `en`,
    author: `Josh Park`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        tagsPath: "/blog/tags",
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About`,
            slug: `/about`
          },
          {
            title: `Contact`,
            slug: `/contact`,
          }
        ],
        externalLinks: [
            {
                name: `GitHub`,
                url: `https://github.com/JoshuaPark823`,
            },
            {
                name: `LinkedIn`,
                url: `https://www.linkedin.com/in/joshpark823/`,
            },
        ]
      }
    },
    // Add your GA ID and enable this if you are using Google Analytics
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josh Park | Blog`,
        short_name: `josh-park`,
        description: `Personal website with my aricles and projects`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
