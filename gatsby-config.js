module.exports = {
  siteMetadata: {
    title: 'Kubebuild - The future of CI/CD',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
