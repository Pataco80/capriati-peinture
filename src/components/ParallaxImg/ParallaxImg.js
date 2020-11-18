import React from 'react'

// Import Hooks
import { useWindowSize } from '@hooks'

// Import styles from styled-components file
import * as S from './ParallaxImgStyled'

// import helpers
import { breakpoints } from '@helpers'

// Component
const ParallaxImg = ({ fluid, altImg }) => {
  // Component Variables
  const windowSize = useWindowSize()

  let strength = 100
  if (windowSize > breakpoints.tablet) {
    strength = 250
  }
  if (windowSize > breakpoints.desktop) {
    strength = 400
  }

  // Render Component
  return (
    <S.ParallaxContainer bgImageAlt="the cat" strength={strength}>
      <S.BackgroundImg>
        <S.Image fluid={fluid} alt={altImg} />
      </S.BackgroundImg>
    </S.ParallaxContainer>
  )
}

export default ParallaxImg
