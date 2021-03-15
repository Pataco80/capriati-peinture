import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title, TeamCadresList, TeamTable } from '@components'

// Import styles from styled-components file
import * as S from './TeamStyled'

// GraphQl Queries
export const getData = graphql`
  {
    photo: allFile(filter: { relativeDirectory: { regex: "/team/" } }) {
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
    teamCadres: allTeamCadresDataJson {
      nodes {
        id
        name
        shortName
        photo
        altPhoto
        job
        certifications
        functionDates
      }
    }
    cFc: allTeanCfcDataJson {
      nodes {
        name
      }
    }
    studeents: allTeamStudentsDataJson {
      nodes {
        name
      }
    }
  }
`

// Component
const Team = ({ padding }) => {
  // Component Variables
  const data = useStaticQuery(getData)
  const photoList = data.photo.edges
  const teamCadres = data.teamCadres.nodes
  const teamCfc = data.cFc.nodes
  const teamStudents = data.studeents.nodes
  // Component Functions
  const teamCadrePhoto = photoList.map(({ node }) => ({
    photo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  // Render Component
  return (
    <S.TeamWrapper padding={padding}>
      <Title tag='h2' title='Notre Équipe' titleSection />
      <S.TeamContent>
        <TeamCadresList teamCadrePhoto={teamCadrePhoto} team={teamCadres} />
      </S.TeamContent>
      <S.TeamContent>
        <TeamTable team={teamCfc} title='Nos employés avec CFC' />
        <TeamTable team={teamStudents} title='Nos apprentis' />
      </S.TeamContent>
    </S.TeamWrapper>
  )
}

export default Team
