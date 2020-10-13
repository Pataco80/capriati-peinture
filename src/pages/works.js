import React from 'react'

// Import components from Gatsby and plugins Gatsby
import {graphql} from 'gatsby'

// Import Components for App
import Layout from '../components/Globals/Layout'
import SEO from '../components/Globals/SEO'
import Hero from '../components/Hero'
import References from '../components/References'
import Works from '../components/Works/Works'

// GraphQl Queries
export const getImage = graphql`
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
const worksPage = ({data}) => {

  // Render Component
  return (
    <Layout>
      <SEO title='Nos Travaux' description="Nos travaux éféctués au fil des années" />
      <Hero title='Nos Travaux' bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Works />
      <References />
    </Layout>
  )
}

export default worksPage
