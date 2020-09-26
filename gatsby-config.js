/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 // Import informations from website configuration. For more details see the comments of the website-config-example.js configuration file
const website = require('./config/website-config')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix
const siteUrl = website.url + pathPrefix

module.exports = {
/* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
  siteUrl: siteUrl, // For gatsby-plugin-sitemap
  pathPrefix,
  title: website.title,
  titleAlt: website.titleAlt,
  description: website.description,
  banner: website.logo,
  headline: website.headline,
  siteLanguage: website.siteLanguage,
  ogLanguage: website.ogLanguage,
  author: website.author,
  twitter: website.twitter,
  facebook: website.facebook,
},

/* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `${siteUrl}`,
        sitemap: `${siteUrl}/sitemap.xml`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },

    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans JP`,
            subsets: [`latin`],
            variants: [`100`, `300`, `400`, `500`, `700`, `900`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [`100`, `300`, `400`, `500`, `700`, `900`, `100i`, `300i`, `400i`, `500i`, `700i`, `900i`]
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
        icon_options: {
          purpose: `maskable`,
        },
        cache_busting_mode: 'none'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        // lets you specify pages whose resources should be precached by the service worker. Ex: precachePages: [`/about_us/`, `/services/*`],
        //precachePages: [`/about/`, `/services/`, `/works/`, `/contact/`],
        workboxConfig: {
          globPatterns: ['**/assets/images/**/*']
        }
      }
    },
  ],
}
