// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// const dotenv = require('dotenv')

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config()
// }

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `UCare`,
    description: `Church management software simplified`,
    author: `UCare`,
    siteUrl: 'https://ucarehq.com',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: {
          options: {
            removeCR: true,
            precision: 6, // for bootstrap
            //debug: true,
            //sourceMap: true, //default is false
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // host: process.env.CONTENTFUL_HOST
      },
    },
    'gatsby-transformer-remark',
  ],
}
