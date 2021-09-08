module.exports = {
  siteMetadata: {
    title: `Alfath Muqoddas`,
    description: `My personal website build with react and gatsbyjs`,
    author: `alfathmuqoddas`,
    siteUrl: `https://alfathmuqoddase.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "sSpaceX",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "spacex",
        // Url to query from
        url: "https://api.spacex.land/graphql/",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tour-ink-json`,
        path: `${__dirname}/src/pages/tour-ink/tour-ink-json`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alfathmuqoddas-website`,
        short_name: `alfathmuqoddas`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
