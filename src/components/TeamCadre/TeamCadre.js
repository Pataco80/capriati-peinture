import React from 'react'

// Import Components for App
import { Profile } from '@components'

// Import styles from styled-components file and helpers
import * as S from './TeamCadreStyled'

// Component
const TeamCadre = (props) => {
  // Component Variables
  const { fluid, altPhoto, name, job, certifications, date } = props

  // Render Component
  return (
    <S.CadreItemWrapper>
      <Profile fluid={fluid} alt={altPhoto} name={name} job={job} />
      {certifications.map((item, i) => {
        return <p Key={i}>{item}</p>
      })}
      <p>{date}</p>
    </S.CadreItemWrapper>
  )
}

export default TeamCadre
