import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import { Layout, SEO, Hero, References, Works } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

// GraphQl Queries
export const getImage = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/work-page-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Component
const worksPage = ({ data }) => {
  // Render Component
  return (
    <Layout background={setColor.mainGreyL3}>
      <SEO
        title="Nos Travaux"
        description="Nos travaux éféctués au fil des années"
        keywords="nos travaux, nos références, gallerie"
        image="work"
      />
      <Hero title="Nos Travaux" bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Works />
      <References background={setColor.mainGreyL3} />
    </Layout>
  )
}

export default worksPage
