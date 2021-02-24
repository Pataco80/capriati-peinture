import React from 'react'

// Import styles from styled-components file
import * as S from './PartenersItemStyled'

// Component
const PartenersItem = (props) => {
  // Component Variables
  const { fluid, altLogo, url, urlTitle } = props
  // Render Component
  return (
    <S.PartenersItemWrapper href={url} title={urlTitle}>
      <S.PartenersLogo fluid={fluid} alt={altLogo} />
    </S.PartenersItemWrapper>
  )
}

export default PartenersItem
