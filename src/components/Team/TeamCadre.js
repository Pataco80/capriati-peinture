import React from 'react'

// Import Components for App
import Profile from '../Profile/Profile'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, media } from '../../theme/helpers'

// Component
const TeamCadre = props => {
  // Component Variables
  const { fluid, altPhoto, name, job, certifications, date } = props

  // Render Component
  return (
    <CadreItemWrapper>
      <Profile fluid={fluid} alt={altPhoto} name={name} job={job} />
      {certifications.map((item, i) => {
        return <p Key={i}>{item}</p>
      })}
      <p>{date}</p>
    </CadreItemWrapper>
  )
}

// Styles from styled-components
const CadreItemWrapper = styled.div`
  ${setFlex({ flDir: 'column', y: 'center' })};
  margin-bottom: 2rem;
  width: 100%;
  max-width: 25rem;
  text-align: center;

  ${media.greaterThan('tablet')`
    width: 50%;
    margin-bottom: 0;
    padding: 0 1.5rem;
  `}

  ${media.greaterThan('desktop')`
    width: 30%;
    margin-bottom: 0;
    padding: 0 1.5rem;
  `}
`

export default TeamCadre
