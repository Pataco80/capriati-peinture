import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Layout from '../components/Globals/Layout'
import Hero from '../components/Hero'
import Services from '../components/OurServices/Services'
import SEO from '../components/Globals/SEO'

// Import styled-components and helpers

// GraphQl Queries
export const query = graphql`
  {
    heroBcg:file(relativePath: {eq: "images/pinceaux.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Component
const servicesPage = ({data}) => {
  // Component Variables

  // Render Component
  return (
    <Layout>
      <SEO title='Nos Services' description="Liste de nos services en plâtrerie, peinture, papier-peint, giclage et fresques décoratives" keywords="Plâtre, crépi, papiers-peints, giclage, fresques décoratives"/>
      <Hero title='Nos Services' bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Services/>
    </Layout>
  )
}

// React PropTypes and more...


// Styles from styled-components


export default servicesPage
