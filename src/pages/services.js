import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import { Layout, SEO, Hero, Services } from '@components'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/services-page-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Component
const servicesPage = ({ data }) => {
  // Render Component
  return (
    <Layout>
      <SEO
        title="Nos Services"
        description="Liste de nos services en plâtrerie, peinture, papier-peint, giclage et fresques décoratives"
        keywords="Plâtre, crépi, papiers-peints, giclage, fresques décoratives"
        image="services"
      />
      <Hero title="Nos Services" bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Services />
    </Layout>
  )
}

export default servicesPage
