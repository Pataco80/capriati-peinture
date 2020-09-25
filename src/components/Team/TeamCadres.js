import React from 'react'

// Import Components for App
import TeamCadre from './TeamCadre'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, media } from '../../theme/helpers'

// Component
const TeamCadres = (props) => {

  // Component Variables
  const { team, teamPhoto } = props

  // Render Component
  return (
    <TeamCadresWrapper>
      {
        team.map((item,i) => {
          const {altPhoto,name,shortName,job,certifications,date} = item
          const regExp = new RegExp(shortName, "i");
          const photoPath = teamPhoto.find(({originalName}) => originalName.match(regExp))
          .photo

          return(
            <TeamCadre
              Key={i}
              fluid={photoPath}
              altPhoto={altPhoto}
              name={name}
              job={job}
              certifications={certifications}
              date={date}
            />
          )
        })
      }
    </TeamCadresWrapper>
  )
}

// Styles from styled-components
const TeamCadresWrapper = styled.div`
  ${setFlex({flDir:'column'})};
  width:100%;

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row', x:'space-around', y:'flex-start'})};
  `}
`

export default TeamCadres