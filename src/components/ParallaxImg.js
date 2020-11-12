import React from 'react'

// Import Hooks
import useWindowSize from '../hooks/useWindowSize'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import Components for App
import { Parallax, Background } from 'react-parallax'

// Import styled-components, styledElements and helpers
import styled, { css } from 'styled-components'
import { breakpoints } from '../theme/helpers'

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
    <ParallaxContainer bgImageAlt="the cat" strength={strength}>
      <BackgroundImg>
        <Image fluid={fluid} alt={altImg} />
      </BackgroundImg>
    </ParallaxContainer>
  )
}

export default ParallaxImg

// Styles from styled-components
const ImgSize = css`
  width: 100%;
  min-height: 200px;
  height: 50vw;
  max-height: 1000px;
`

const ParallaxContainer = styled(Parallax)`
  ${ImgSize};

  .react-parallax-background-children {
    width: 100%;
  }
`

const BackgroundImg = styled(Background)`
  width: 100%;
`

const Image = styled(Img)`
  ${ImgSize};
`
