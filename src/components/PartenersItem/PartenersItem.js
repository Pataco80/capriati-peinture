import React from 'react'

// Import styles from styled-components file
import * as S from './PartenersItemStyled'

// Component
const PartenersItem = ({ fluid, altLogo, url, urlTitle }) => {
  // Render Component
  return (
    <S.PartenersItemWrapper href={url} title={urlTitle}>
      <S.PartenersLogo fluid={fluid} alt={altLogo} />
    </S.PartenersItemWrapper>
  )
}

export default PartenersItem
