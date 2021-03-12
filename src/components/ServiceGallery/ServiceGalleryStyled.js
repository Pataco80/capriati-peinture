import styled from 'styled-components'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import StyledElements for basic styles
import { SectionContentCenter } from '@styledElements/SectionStyled'

// Import helpers
import { setFlex, media, setRadius, setShadow } from '@helpers'

// Export Styles for the component
export const GallerySection = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};
  margin-bottom: 3rem;

  ${media.greaterThan('smTablet')`
    ${setFlex({ flDir: 'row', x: 'space-around' })};
  `}
`

export const ImgWrapper = styled.div`
  width: 100%;
  ${setRadius({ allPx: 12 })};
  box-shadow: ${setShadow('medium')};
  margin-bottom: 2rem;
  max-width: 30rem;

  ${media.greaterThan('tablet')`
    width: 30%;
  `}
`

export const Image = styled(Img)`
  ${setRadius({ allPx: 12 })};
`
