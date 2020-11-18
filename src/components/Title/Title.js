import React from 'react'

// Import styles from styled-components file and helpers
import * as S from './TitleStyled'

// Component
const Title = ({ title, tag: Tag, hidden, titleSection, noShadow, children }) => {
  // Render Component
  return (
    <S.TitleWrapper hidden={hidden} noShadow={noShadow} titleSection={titleSection}>
      <Tag>{title || children}</Tag>
    </S.TitleWrapper>
  )
}

export default Title
