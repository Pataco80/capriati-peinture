import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/OurServices/Services'

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
      <Hero title='Nos Services' bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Services/>
    </Layout>
  )
}

// React PropTypes and more...


// Styles from styled-components


export default servicesPage
