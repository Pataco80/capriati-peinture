import React from 'react'

// Import Components for App
import { Profile } from '@components'

// Import styles from styled-components file and helpers
import * as S from './TeamCadreStyled'

// Component
const TeamCadre = (props) => {
  // Component Variables
  const { fluid, altPhoto, name, job, certifications, functionDates } = props

  // Render Component
  return (
    <S.CadreItemWrapper>
      <Profile
        className='team-profile'
        fluid={fluid}
        alt={altPhoto}
        name={name}
        job={job}
      />
      <S.CadreInfo>
        <S.InfoList>
          {certifications.map((item, i) => {
            return <li Key={i}>{item}</li>
          })}
        </S.InfoList>
        <S.InfoList className='functionDates'>
          {functionDates.map((item, i) => {
            return <li Key={i}>{item}</li>
          })}
        </S.InfoList>
      </S.CadreInfo>
    </S.CadreItemWrapper>
  )
}

export default TeamCadre
