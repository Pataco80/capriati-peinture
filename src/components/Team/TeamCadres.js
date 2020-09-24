import React from 'react'
// Import components from Gatsby and plugins Gatsby

// Import Components for App
import TeamCadre from './TeamCadre'
// Import data files

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, media } from '../../theme/helpers'


const TeamCadres = (props) => {
  const {team, teamPhoto} = props
  console.log(teamPhoto)

  return (
    <TeamCadresWrapper>
      {
        team.map((item,i) => {
          const {altPhoto,name,shortName,job,certifications,date} = item
          const regExp = new RegExp(shortName, "i");
              const photoPath = teamPhoto.find(({originalName}) => originalName.match(regExp))
              .photo
          return(
            <TeamCadre Key={i}
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

const TeamCadresWrapper = styled.div`
${setFlex({flDir:'column'})};
  width:100%;

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row', x:'space-around', y:'flex-start'})};
  `}
`
export default TeamCadres
