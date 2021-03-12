import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title, PartenersItem } from '@components'

// Import styles from styled-components file
import * as S from './PartenersStyled'

// GraphQl Queries
const getData = graphql`
  {
    logos: allFile(filter: { relativePath: { regex: "/parteners/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
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
    <S.PartenersWrapper>
      <Title tag='h2' title='Nous sommes membres' titleSection />
      <S.PartenersLogosContainer>
        {parteners.map((item, i) => {
          const { shortName, altLogo, url, urlTitle } = item

          // Variables and Functions for icon and featured images
          const regExp = new RegExp(shortName, 'i')
          const logoPath = partenersLogo.find(({ originalName }) =>
            originalName.match(regExp)
          ).logo

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
      </S.PartenersLogosContainer>
    </S.PartenersWrapper>
  )
}

export default Parteners
