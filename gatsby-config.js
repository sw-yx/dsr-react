module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/_design-systems`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
  ],
}
