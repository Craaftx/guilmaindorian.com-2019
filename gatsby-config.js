module.exports = {
  siteMetadata: {
    title: `Guilmain Dorian`,
    description: `Learn more about me by exploring my personnal website created with Gatsby.js and a lot of CSS.`,
    author: `@craaftx`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-79846325-4",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guilmain Dorian - Porfolio`,
        short_name: `Dorian G`,
        start_url: `/`,
        background_color: `#1d1d2d`,
        theme_color: `#1d1d2d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        host: "guilmaindorian.com",
      },
    },
  ],
}
