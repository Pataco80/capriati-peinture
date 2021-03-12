import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Profile } from '@components'

// Import styles from styled-components file
import * as S from './HistoryProfileStyled'

// GraphQl Queries
const getData = graphql`
  {
    photo: allFile(filter: { relativePath: { regex: "/familly/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
    historyProfile: allHistoryProfileDataJson {
      nodes {
        id
        name
        shortName
        altPhoto
      }
    }
  }
`
// Component
const Historyprofile = () => {
  // Component Variables
  const data = useStaticQuery(getData)
  const photoList = data.photo.edges
  const historyProfile = data.historyProfile.nodes

  // Component Functions
  const historyPhoto = photoList.map(({ node }) => ({
    photo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  // Render Component
  return (
    <S.HistoryProfileWrapper>
      {historyProfile.map(({ id, name, shortName, altPhoto }) => {
        // Images Variables and Functions
        const regExp = new RegExp(shortName, 'i')
        const photoPath = historyPhoto.find(({ originalName }) =>
          originalName.match(regExp)
        ).photo

        // Return Profile Images
        return (
          <S.ProfileItem>
            <Profile
              id={id}
              name={name}
              fluid={photoPath}
              altPhoto={altPhoto}
            />
          </S.ProfileItem>
        )
      })}
    </S.HistoryProfileWrapper>
  )
}

export default Historyprofile
