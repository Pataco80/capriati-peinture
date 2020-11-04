const businessInfo = {
  name:'Capriati SA',
  shortName:'Capriati',
  altName: 'Capriati Peinture',
  bossInfo:{
    firstName : 'Vincent',
    lastName: 'Capriati',
    fullName: 'Vincent Capriati', // Username to display in the author segment.
    birthday: '13 January 1985',
    bossDescription:"Décris ton parcours depuis ta formation, tes études, bref, tout ce qui t'a conduit au poste que tu occupes.",
    bossSlogan: "Décris la citation définissant les valeurs de ton entreprise",
  },
  address:{
    road:'Z.A. La Pièce',
    roadNumber: '20',
    zipCode:'1180',
    city:'Rolle',
    canton:'Vaud',
    shortCanton:'VD',
    country:'Suisse',
    shortCountry:'CH',
  },
  email: 'capriati@bluewin.ch', // Email used for RSS feed's author segment
  userTwitter:'@CapriatiSA',
  userFacebook:'Capriati Peinture'
}

// dates formats functions
const months = ["janvier", "février", "mars","avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
let current_datetime = new Date()
let formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
console.log(formatted_date)

const websiteConfig = {
  siteTitle: `${businessInfo.name}`, // Site title.
  siteTitleShort: `${businessInfo.shortName}`, // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: `${businessInfo.altName}`, // Alternative site title for SEO.
  favicon: 'src/assets/images/icons/favicon.png',
  siteLogo: '/images/cover.png', // Logo used for SEO and manifest.
  siteLanguage: 'fr',
  siteUrl: 'https://www.capriati.ch', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Société de peinture en bâtiments de la famille Capriati. Entreprise familiale basée à Rolle et travaillant sur la région de 'La Côte' dans le canton de Vaud (CH)",
  // Website description used for RSS feeds/meta description tag.
  siteLanguage: 'fr', // Facebook Language
  keywords:['Entreprise de peinture','Entreprise familiale','Peinture à Rolle','Peinture','Plâtre','Décoration','Papier-peint','Giclage'],
  // dateFromFormat: 'DD-MMM-YYYY', // Date format used in the frontmatter.
  dateFormat: `${formatted_date}`, // Date format for display.
  // siteRss: '/rss.xml', // Path to the RSS file.
  // siteRssTitle: 'Gatsby Advanced Starter RSS feed', // Title of the RSS feed
  // siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  // googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  // disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  //postsPerPage: 4, // Amount of posts displayed per listing page.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  socialLinks: [
    {
      label: 'Facebook',
      url: 'https://facebook.com/Capriati-Peinture',
      iconClassName: 'fa fa-facebook'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/Vagr9K',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: `mailto:${businessInfo.email}`,
      iconClassName: 'fa fa-envelope'
    }
  ],
  author: `${businessInfo.bossInfo.fullName}`,
  twitterUserName: `${businessInfo.userTwitter}`,
  facebookUserName: `${businessInfo.userFacebook}`,
  copyright: `Copyright © ${new Date().getFullYear()}. Capriati S.A.`, // Copyright string for the footer of the website and RSS feed.
  themeColor: '#EE332D', // Used for setting manifest and progress theme colors.
  backgroundColor: '#fff' // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (websiteConfig.pathPrefix === '/') {
  websiteConfig.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  websiteConfig.pathPrefix = `/${websiteConfig.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (websiteConfig.siteUrl.substr(-1) === '/')
websiteConfig.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (websiteConfig.siteRss && websiteConfig.siteRss[0] !== '/')
websiteConfig.siteRss = `/${websiteConfig.siteRss}`;



module.exports = websiteConfig;