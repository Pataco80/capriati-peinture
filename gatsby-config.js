/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Import informations from websiteConfig configuration. For more details see the comments of the websiteConfig-config-example.js configuration file
const websiteConfig = require('./config/website-config')

const pathPrefix = websiteConfig.pathPrefix
const siteUrl = websiteConfig.siteUrl + pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: websiteConfig.pathPrefix,
  siteMetadata: {
    siteUrl: siteUrl, // For gatsby-plugin-sitemap
    pathPrefix,
    title: websiteConfig.siteTitle,
    description: websiteConfig.siteDescription,
    keywords: websiteConfig.keywords,
    logo: websiteConfig.siteLogo,
    siteLanguage: websiteConfig.siteLanguage,
    author: websiteConfig.author,
    authorPosition: websiteConfig.authorPosition,
    authorDescription: websiteConfig.authorDescription,
    authorSlogan: websiteConfig.authorSlogan,
    twitterUserName: websiteConfig.twitterUserName,
    facebookUserName: websiteConfig.facebookUserName,
    copyright: websiteConfig.copyright,
  },

  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `${siteUrl}`,
        sitemap: `${siteUrl}/sitemap.xml`,
      },
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
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@styles': 'src/theme/helpers',
          '@stylesElements': 'src/components/styledElements',
        },
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
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans JP`,
            subsets: [`latin`],
            variants: [`100`, `300`, `400`, `500`, `700`, `900`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [
              `100`,
              `300`,
              `400`,
              `500`,
              `700`,
              `900`,
              `100i`,
              `300i`,
              `400i`,
              `500i`,
              `700i`,
              `900i`,
            ],
          },
        ],
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: websiteConfig.siteTitle,
        short_name: websiteConfig.siteTitleShort,
        description: websiteConfig.siteDescription,
        start_url: pathPrefix,
        background_color: websiteConfig.backgroundColor,
        theme_color: websiteConfig.themeColor,
        display: 'standalone',
        icon: websiteConfig.favicon,
        icons: [
          {
            src: '/favicons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75',
          },
          {
            src: '/favicons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: '/favicons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: '/favicons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: '/favicons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: '/favicons/favicon.png',
            sizes: '512x512',
            type: 'image/png',
            density: '4.0',
          },
        ],
        icon_options: {
          purpose: `maskable`,
        },
        crossOrigin: `use-credentials`,
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        // lets you specify pages whose resources should be precached by the service worker. Ex: precachePages: [`/about_us/`, `/services/*`],
        precachePages: [`/about/`, `/services/`, `/contact/`],
        workboxConfig: {
          globPatterns: ['**/assets/images/**/*'],
        },
      },
    },
  ],
}
