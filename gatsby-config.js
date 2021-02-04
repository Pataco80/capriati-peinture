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
    bossName: websiteConfig.bossFullName,
    bossPosition: websiteConfig.bossPosition,
    bossDescription: websiteConfig.bossDescription,
    bossSlogan: websiteConfig.bossSlogan,
    businessRoad: websiteConfig.businessAdressRoad,
    businessRoadNumber: websiteConfig.businessAdressRoadNumber,
    businessZipCode: websiteConfig.businessAdressZipCode,
    businessCity: websiteConfig.businessAdressCity,
    businessCanton: websiteConfig.businessAdressCanton,
    businessShortCanton: websiteConfig.businessAdressShortCanton,
    businessContry: websiteConfig.businessAdressCountry,
    businessShortCountry: websiteConfig.businessAdressShortCountry,
    businessPhone: websiteConfig.businessPhone,
    businessFax: websiteConfig.businessFax,
    businessEmail: websiteConfig.businessEmail,
    copyright: websiteConfig.copyright,
    twitterUserName: websiteConfig.twitterUserName,
    facebookUserName: websiteConfig.facebookUserName,
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
          '@styledElements': 'src/components/styledElements',
          '@helpers': 'src/theme/helpers',
          '@hooks': 'src/hooks',
          '@utils': 'src/utils',
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans JP', 'Roboto'],
        },
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: websiteConfig.siteTitle,
        short_name: websiteConfig.siteTitleShort,
        description: websiteConfig.siteDescription,
        start_url: '/',
        background_color: websiteConfig.backgroundColor,
        theme_color: websiteConfig.themeColor,
        display: 'standalone',
        icon: websiteConfig.favicon,
        icons: [
          {
            src: '/favicons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        icon_options: {
          purpose: `maskable`,
        },
        crossOrigin: `use-credentials`,
        cache_busting_mode: 'none',
      },
    },
    'gatsby-plugin-offline',
  ],
}
