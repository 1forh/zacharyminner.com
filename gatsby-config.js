module.exports = {
  siteMetadata: {
    title: `Zach Minner`,
    description: `Projects, articles and other random stuff by Zach Minner.`,
    siteUrl: 'https://www.zacharyminner.com',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/garden/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `games`,
        path: `${__dirname}/src/garden/games`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/garden/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `snippets`,
        path: `${__dirname}/src/garden/snippets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zacharyminner.com`,
        short_name: `zacharyminner.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/plant-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-59393507-16',
      },
    },
  ],
};
