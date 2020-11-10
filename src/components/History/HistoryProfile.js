import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Profile from '../Profile/Profile'
import { SectionContentCenter } from '../styledElements/SectionStyled'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { setFlex, media } from '../../theme/helpers'

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
    <HistoryProfileWrapper>
      {historyProfile.map(({ id, name, shortName, altPhoto }) => {
        // Images Variables and Functions
        const regExp = new RegExp(shortName, 'i')
        const photoPath = historyPhoto.find(({ originalName }) => originalName.match(regExp)).photo

        // Return Profile Images
        return (
          <ProfileItem>
            <Profile id={id} name={name} fluid={photoPath} altPhoto={altPhoto} />
          </ProfileItem>
        )
      })}
    </HistoryProfileWrapper>
  )
}

// Styles from styled-components
const HistoryProfileWrapper = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};
  width: 100%;

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row', y: 'flex-start' })};
  `}
`

const ProfileItem = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  ${media.greaterThan('tablet')`
    width: 33%;
    margin-bottom: 0;
    padding: 0 1rem;
  `}
`

export default Historyprofile
