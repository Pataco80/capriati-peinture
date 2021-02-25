/* eslint-disable react/prop-types */
import React from 'react'
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import {
  Layout,
  SEO,
  Hero,
  About,
  History,
  ParallaxImg,
  Team,
  Parteners,
} from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

// GraphQl Queries
export const getImage = graphql`
  {
    heroBcg: file(
      relativePath: { eq: "images/banners/about-page-banner.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parallaxBcg: file(
      relativePath: { eq: "images/banners/about-page-banner-parallax.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Component
const AboutPage = ({ data, location }) => {
  const { siteTitle } = useSiteMetadata()
  const currentPage = location.href
  console.log(`je suis la page href: ${currentPage}`)

  // Render Component
  return (
    <Layout background={`${setColor.mainWhite}`} location={currentPage}>
      <SEO
        pathname='/about/'
        title='A Propos de Nous'
        description="A Propos de l'entrerise Capriati S.A., son histoire, son équipe et ces partenaires"
        keywords={
          ('A Propos',
          'entreprise peinture',
          'entreprise familiale',
          'entretien',
          'rénovation peinture',
          'historique')
        }
        image='about'
        shareHashTag={`#${siteTitle}`}
        shareTitle='Notre entreprise'
      />
      <Hero
        title='A Propos de nous'
        bcgImage={data.heroBcg.childImageSharp.fluid}
      />
      <About about />
      <History background={setColor.mainGreyL3} />
      <ParallaxImg
        fluid={data.parallaxBcg.childImageSharp.fluid}
        altImg='Peinture de facade boisée'
        background={setColor.mainGreyL3}
      />
      <Team />
      <Parteners />
    </Layout>
  )
}

export default AboutPage
