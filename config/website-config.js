module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Capriati SA', // Navigation and Site Title
  titleAlt: 'Capriati Peinture', // Title for JSONLD
  description: 'Société de peinture en bâtiments de la famille Capriati. Entreprise familiale basée à Rolle et travaillant sur la région de "La Côte" dans le canton de Vaud (CH)',
  headline: 'Écrit et publié par DWDevelopment', // Headline for schema.org JSONLD
  url: 'http://www.capriati.ch', // Domain of your site. No trailing slash!
  siteLanguage: 'fr', // Language Tag on <html> element
  logo: 'src/images/logos/', // Used for SEO
  ogLanguage: 'fr_CH', // Facebook Language
  keywords:'',

  // JSONLD / Manifest
  favicon: 'src/images/icons/favicon.png', // Used for manifest favicon generation
  shortName: 'Capriati', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Vincent Capriati', // Author for schemaORGJSONLD
  themeColor: '#EE332D',
  backgroundColor: '#fff',

  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  // googleAnalyticsID: 'UA-47519312-7',

  // skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}