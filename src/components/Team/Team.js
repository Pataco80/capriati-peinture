import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../Title'
import TeamCadres from './TeamCadres'
import TeamTable from './teamTable'
import { Section, SectionContentCenter } from '../styledElements/SectionStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media } from '../../theme/helpers'

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
        date
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
const Team = props => {
  // Component Variables
  const { background, padding } = props
  const data = useStaticQuery(getData)
  const photoList = data.photo.edges
  const teamCadres = data.teamCadres.nodes
  const teamCfc = data.cFc.nodes
  const teamStudents = data.studeents.nodes

  // Component Functions
  const teamPhoto = photoList.map(({ node }) => ({
    photo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  // Render Component
  return (
    <TeamWrapper background={background} padding={padding}>
      <Title tag="h2" title="Notre Équipe" titleSection />
      <TeamContent>
        <TeamCadres teamPhoto={teamPhoto} team={teamCadres} />
      </TeamContent>
      <TeamContent>
        <TeamTable team={teamCfc} title="Nos employés avec CFC" />
        <TeamTable team={teamStudents} title="Nos aprentis" />
      </TeamContent>
    </TeamWrapper>
  )
}

// Styles from styled-components
const TeamWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
`

const TeamContent = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column', y: 'center', wrap: 'nowrap' })};

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({ flDir: 'row', x: 'space-around', y: 'space-around' })};
    align-items: stretch;
  `}
`

export default Team
