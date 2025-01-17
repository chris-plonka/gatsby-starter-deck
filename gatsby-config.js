module.exports = {
  siteMetadata: {
    name: `Krzysztof Płonka`,
    title: ``,
    date: `December 23, 2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/slides`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
          resolve: `gatsby-plugin-tidio`,
          options: {
            tidioId: "8fy5d2hccjhc1yc3goq9mfbfe9wxsih0",
            // get this from the tidio script widget
          },
        },
      ],
    };
