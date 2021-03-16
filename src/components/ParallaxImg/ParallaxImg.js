import React from 'react'
import PropTypes from 'prop-types'
// Import Hooks
import useWindowSize from '@hooks/useWindowSize'

// Import styles from styled-components file
import * as S from './ParallaxImgStyled'

// import helpers
import { breakpoints } from '@helpers'

// Component
const ParallaxImg = (props) => {
  // Component Variables
  const { fluid, altImg } = props
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
    <S.ParallaxContainer bgImageAlt={altImg} strength={strength}>
      <S.BackgroundImg>
        <S.Image fluid={fluid} alt={altImg} />
      </S.BackgroundImg>
    </S.ParallaxContainer>
  )
}
// React PropTypes and more...

ParallaxImg.defaultProps = {
  altImg: `Photo du Paralaxe`,
}

ParallaxImg.propTypes = {
  fluid: PropTypes.object.isRequired,
  altImg: PropTypes.string.isRequired,
}

export default ParallaxImg
