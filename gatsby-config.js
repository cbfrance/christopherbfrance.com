module.exports = {
  siteMetadata: {
    title: 'Unthinkingly.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
