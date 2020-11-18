import styled, { css } from 'styled-components'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import Components for App
import { Parallax, Background } from 'react-parallax'

// Styled CSS
const ImgSize = css`
  width: 100%;
  min-height: 200px;
  height: 50vw;
  max-height: 1000px;
`

// Export Styles for the component
export const ParallaxContainer = styled(Parallax)`
  ${ImgSize};

  .react-parallax-background-children {
    width: 100%;
  }
`

export const BackgroundImg = styled(Background)`
  width: 100%;
`

export const Image = styled(Img)`
  ${ImgSize};
`
