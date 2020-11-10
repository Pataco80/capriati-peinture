import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Layout from '../components/Globals/Layout'
import SEO from '../components/Globals/SEO'
import Hero from '../components/Hero'
import About from '../components/About/About'
import Valeurs from '../components/About/Valeurs'
import History from '../components/History/History'
import Team from '../components/Team/Team'
import Parteners from '../components/Parteners/Parteners'

// Import styled-components, styledElements and helpers
import { setColor } from '../theme/helpers'

// GraphQl Queries
export const getImage = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/about-page-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Component
const aboutPage = ({ data }) => {
  // Render Component
  return (
    <Layout>
      <SEO
        title="A Propos de Nous"
        description="A Propos de l'entrerise Capriati S.A., son histoire, son équipe et ces partenaires"
        keywords="A Propos, entreprise peinture, entreprise familiale, entretien, rénovation peinture, historique"
        image="about"
      />
      <Hero title="A Propos de nous" bcgImage={data.heroBcg.childImageSharp.fluid} />
      <About about />
      <Valeurs background={setColor.mainGreyL3} />
      <History />
      <Team background={setColor.mainGreyL3} />
      <Parteners />
    </Layout>
  )
}

export default aboutPage
