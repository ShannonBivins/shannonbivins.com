module.exports = {
  siteMetadata: {
    title: `Shannon Bivins`,
    description: `My website`,
    author: `@shannonbivins`,
    siteUrl: `https://shannonbivins.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://shan-strapi.herokuapp.com",
        accessToken: '64d4b42dad12fea69d3e692f29591f0e9680ce38c715d8d53b09d7f16b2c580461ff0ddddcf52f434c7211a643e5bbb7690bf3a16e760d7917f2c8ef0141b14562d9e651747022d311be0289db4e1e4a84abe17740cba88abdf36656cff905c6ac0bff128f2bec87c9702a7e2d97215e2e015f5158963c974f85ed0968391a1c',
        collectionTypes: [
          "article",
          "category",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-image`,
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
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
