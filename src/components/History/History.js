import React from 'react'

// Import Components for App
import { Title, HistoryProfile, Historical } from '@components'

// Import styles from styled-components file
import * as S from './HistoryStyled'

// Component
const History = ({ background }) => {
  // Render Component
  return (
    <S.HistoryWrapper background={background}>
      <Title tag="h2" title="Notre Histoire" titleSection />
      <HistoryProfile />
      <Historical />
    </S.HistoryWrapper>
  )
}

export default History
