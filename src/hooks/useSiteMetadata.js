import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          siteTitle
          siteDescription
          logo
          siteLanguage
          siteKeywords
          bossName
          bossPosition
          bossDescription
          bossSlogan
          businessRoad
          businessRoadNumber
          businessZipCode
          businessCity
          businessCanton
          businessShortCanton
          businessContry
          businessShortCountry
          businessPhone
          businessFax
          businessEmail
          copyright
          twitterUserName
          facebookUserName
          conceptorWebSite
          formSpree
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
