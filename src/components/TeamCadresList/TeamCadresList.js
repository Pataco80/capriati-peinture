import React from 'react'

// Import Components for App
import { TeamCadre } from '@components'

// Import styles from styled-components file
import * as S from './TeamCadresListStyled'

// Component
const TeamCadresList = ({ team, teamCadrePhoto }) => {
  // Component Variables

  // Render Component
  return (
    <S.TeamCadresWrapper>
      {team.map((item, i) => {
        // Images Variables and Functions
        const { altPhoto, name, shortName, job, certifications, date } = item
        const regExp = new RegExp(shortName, 'i')
        const photoPath = teamCadrePhoto.find(({ originalName }) =>
          originalName.match(regExp)
        ).photo

        // Return Team Images
        return (
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
      })}
    </S.TeamCadresWrapper>
  )
}

export default TeamCadresList
