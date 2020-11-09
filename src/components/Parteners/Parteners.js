import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../Title'
import PartenersItem from './PartenersItem'

// Import styled-components and helpers
import styled from 'styled-components'
import { Section, SectionContentCenter } from '../styledElements/SectionStyled'
import { media, setFlex } from '../../theme/helpers'

// GraphQl Queries
const getData = graphql`
  {
    logos: allFile(filter: { relativePath: { regex: "/parteners/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
    partenersData: allPartnersDataJson {
      nodes {
        id
        name
        shortName
        logo
        altLogo
        url
        urlTitle
      }
    }
  }
`

// Component
const Parteners = () => {
  // Component Variables
  const data = useStaticQuery(getData)
  const logoList = data.logos.edges
  const parteners = data.partenersData.nodes

  // Component Functions
  const partenersLogo = logoList.map(({ node }) => ({
    logo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  // Render Component
  return (
    <PartenersWrapper>
      <Title tag="h2" title="Nos Partenaires" titleSection />
      <PartenersLogosContainer>
        {parteners.map((item, i) => {
          const { shortName, altLogo, url, urlTitle } = item

          // Variables and Functions for icon and featured images
          const regExp = new RegExp(shortName, 'i')
          const logoPath = partenersLogo.find(({ originalName }) => originalName.match(regExp)).logo

          // Return Item on Card or page format
          return (
            <PartenersItem
              Key={i}
              fluid={logoPath}
              altLogo={altLogo}
              url={url}
              urlTitle={urlTitle}
            />
          )
        })}
      </PartenersLogosContainer>
    </PartenersWrapper>
  )
}

// Styles from styled-components
const PartenersWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
`

const PartenersLogosContainer = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row', x: 'space-around' })};
  `}
`

export default Parteners
