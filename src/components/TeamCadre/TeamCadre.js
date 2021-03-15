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
      <S.CadresTable>
        <tr>
          {certifications.map((item, i) => {
            return <td Key={i}>{item}</td>
          })}
        </tr>
        <tr className='functionDates'>
          {functionDates.map((item, i) => {
            return <td Key={i}>{item}</td>
          })}
        </tr>
      </S.CadresTable>
    </S.CadreItemWrapper>
  )
}

export default TeamCadre
