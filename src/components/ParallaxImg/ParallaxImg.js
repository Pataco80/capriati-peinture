import React from 'react'

// Import Hooks
import { useWindowSize } from '@hooks'

// Import styles from styled-components file
import * as S from './ParallaxImgStyled'

// import helpers
import { breakpoints } from '@helpers'

// Component
const ParallaxImg = ({ fluid, altImg, background }) => {
  // Component Variables
  const windowSize = useWindowSize()

  let strength = 150
  if (windowSize > breakpoints.tablet) {
    strength = 250
  }
  if (windowSize > breakpoints.desktop) {
    strength = 400
  }

  // Render Component
  return (
    <S.ParallaxContainer bgImageAlt={altImg} strength={strength} background={background}>
      <S.BackgroundImg>
        <S.Image fluid={fluid} alt={altImg} />
      </S.BackgroundImg>
    </S.ParallaxContainer>
  )
}

export default ParallaxImg
