import React from 'react'

// Import Components for App
import Title from '../Title'
import HistoryProfile from './HistoryProfile'
import Historical from './Historical'
import { Section } from '../styledElements/SectionStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex } from '../../theme/helpers'

// Component
const History = (props) => {

  // Component Variables
  const { background, padding } = props

  // Render Component
  return (
    <HistoryWrapper  background={background} padding={padding}>
      <Title tag='h2' title='Notre Histoire' titleSection/>
      <HistoryProfile />
      <Historical />
    </HistoryWrapper>
  )
}

// Styles from styled-components
const HistoryWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
  padding-bottom:3rem;
`

export default History