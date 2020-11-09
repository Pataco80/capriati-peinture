import React from 'react'

// Import Components for App
import Title from '../Title'

// Import styled-components and helpers
import styled from 'styled-components'
import { media } from '../../theme/helpers'

const Teamtable = props => {
  // Component Variables
  const { team, title } = props

  // Render Component
  return (
    <TeamWrapper>
      <Title tag="h3" title={title} />
      <ul>
        {team.map(({ name }) => {
          return <TeamItem>{name}</TeamItem>
        })}
      </ul>
    </TeamWrapper>
  )
}

// Styles from styled-components
const TeamWrapper = styled.article`
  padding: 1rem;

  ${media.greaterThan('tablet')`
    max-width: 48%;
  `}
`

const TeamItem = styled.li`
  text-align: center;
`

export default Teamtable
