module.exports = {
  siteMetadata: {
    title: `Cannabis Equity Coalition Illinois`,
    description: `An IL nonprofit working to increase social equity in the cannabis industry`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#10AC84`,
        theme_color: `#10AC84`,
        display: `minimal-ui`,
        icon: `src/images/box1_color.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
