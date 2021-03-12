// Fichier de configuration des données du site et de l'entreprise
require('dotenv').config()

// Données de l'entreprise
const businessInfo = {
  businessName: 'Capriati SA',
  businessShortName: 'Capriati',
  businessAltName: 'Capriati Peinture',
  address: {
    road: 'Z.A. La Pièce',
    roadNumber: '20',
    zipCode: '1180',
    city: 'Rolle',
    canton: 'Vaud',
    shortCanton: 'VD',
    country: 'Suisse',
    shortCountry: 'CH',
  },
  email: 'capriati@bluewin.ch', // Email used for RSS feed"s author segment
  phone: '021 825 40 17',
  fax: '021 825 50 11',
  userTwitter: '@CapriatiSA',
  userFacebook: 'Capriati Peinture',

  // Données sur le patron de l'entreprise
  bossInfo: {
    firstName: 'Vincent',
    lastName: 'Capriati',
    fullName: 'Vincent Capriati', // Username to display in the author segment.
    birthday: '13 January 1985',
    position: 'Directeur Administratif',
    bossDescription:
      "Entré en tant qu'apprentis peintre au sein de l'entreprise familiale, j'ai effectué ma formation CFC et suivi par l'obtention d'une Maîtrise fédérale de Chef d'Entreprise. Depuis mars 2020, j'ai repris la succession de l'entreprise.",
    bossSlogan: 'Notre qualité au service des couleurs de votre lieu de vie.',
  },
}
const conceptorSiteInfo = {
  conceptorBusiness: 'DWDevlopment',
}

// dates formats functions
const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
]
let current_datetime = new Date()
let formatted_date =
  current_datetime.getDate() +
  ' ' +
  months[current_datetime.getMonth()] +
  ' ' +
  current_datetime.getFullYear()

// Données du site
const websiteConfig = {
  siteUrl: 'https://capriati.ch', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  // Website description used for RSS feeds/meta description tag.
  siteTitle: `${businessInfo.businessName}`, // Site title.
  siteTitleShort: `${businessInfo.shortName}`, // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: `${businessInfo.altName}`, // Alternative site title for SEO.
  siteDescription:
    'Société de peinture en bâtiments de la famille Capriati. Entreprise familiale basée à Rolle et travaillant sur la région de "La Côte" dans le canton de Vaud (CH)',
  // Logo used for SEO and manifest.
  siteLogo: '/assets/images/logoCapriati.png',
  favicon: 'src/assets/images/icons/favicon.png',
  siteLanguage: 'fr',

  siteKeywords: [
    'Entreprise de peinture',
    'Entreprise familiale',
    'Peinture à Rolle',
    'Peinture',
    'Plâtre',
    'Décoration',
    'Papier-peint',
    'Giclage',
  ],
  bossFullName: `${businessInfo.bossInfo.fullName}`,
  bossDescription: `${businessInfo.bossInfo.bossDescription}`,
  bossSlogan: `${businessInfo.bossInfo.bossSlogan}`,
  bossPosition: `${businessInfo.bossInfo.position}`,
  twitterUserName: `${businessInfo.userTwitter}`,
  facebookUserName: `${businessInfo.userFacebook}`,
  businessAdressRoad: `${businessInfo.address.road}`,
  businessAdressRoadNumber: `${businessInfo.address.roadNumber}`,
  businessAdressZipCode: `${businessInfo.address.zipCode}`,
  businessAdressCity: `${businessInfo.address.city}`,
  businessAdressCanton: `${businessInfo.address.canton}`,
  businessAdressShortCanton: `${businessInfo.address.shortCanton}`,
  businessAdressCountry: `${businessInfo.address.country}`,
  businessAdressShortCountry: `${businessInfo.address.shortCountry}`,
  businessPhone: `${businessInfo.phone}`,
  businessFax: `${businessInfo.fax}`,
  businessEmail: `${businessInfo.email}`,

  // dateFromFormat: "DD-MMM-YYYY", // Date format used in the frontmatter.
  dateFormat: `${formatted_date}`, // Date format for display.
  // siteRss: "/rss.xml", // Path to the RSS file.
  // siteRssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  //postsPerPage: 4, // Amount of posts displayed per listing page.

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  twitterUserName: `${businessInfo.userTwitter}`,
  facebookUserName: `${businessInfo.userFacebook}`,
  socialLinks: [
    {
      label: 'Facebook',
      url: 'https://facebook.com/Capriati-Peinture',
      iconClassName: 'fa fa-facebook',
    },
    // twitter pret à sa demande
    {
      label: 'Twitter',
      url: 'https://twitter.com/Capriati-Peinture',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: `mailto:${businessInfo.email}`,
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: `Copyright © ${
    businessInfo.businessName
  } ${new Date().getFullYear()}`, // Copyright string for the footer of the website and RSS feed.
  themeColor: '#EE332D', // Used for setting manifest and progress theme colors.
  backgroundColor: '#fff', // Used for setting manifest background color.
  webSiteConceptor: 'DWDevlopment',

  // Access API
  formSpree: process.env.GATSBY_FORMSPREE_ID,
}

// Validate

// Make sure pathPrefix is empty if not needed
if (websiteConfig.pathPrefix === '/') {
  websiteConfig.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  websiteConfig.pathPrefix = `/${websiteConfig.pathPrefix.replace(
    /^\/|\/$/g,
    ''
  )}`
}

// Make sure siteUrl doesn"t have an ending forward slash
if (websiteConfig.siteUrl.substr(-1) === '/')
  websiteConfig.siteUrl = config.siteUrl.slice(0, -1)

module.exports = websiteConfig
