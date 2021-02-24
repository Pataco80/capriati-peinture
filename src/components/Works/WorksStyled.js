import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContentCenter } from '@styledElements/SectionStyled'

// Import helpers
import {
  layout,
  setFlex,
  setColor,
  media,
  setRadius,
  setShadow,
} from '@helpers'

// Export Styles for the component
export const WorksWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  padding-bottom: 3rem;
  background: ${setColor.mainWhite};
`

export const WorksContent = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column', y: 'center', wrap: 'nowrap' })};

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({ flDir: 'row', x: 'space-around', y: 'space-around' })};
    align-items: stretch;
  `}
`

export const WorkItem = styled.article`
  ${setFlex({ flDir: 'column' })};
  flex-flow: wrap;
  padding: 1rem;
  width: 100%;
`

export const GallerySection = styled(SectionContentCenter)`
  [class*='Row'] {
    ${setFlex({ flDir: 'column' })};
    margin-bottom: 1rem;

    ${media.greaterThan('tablet')`
      ${setFlex({ flDir: 'row', x: 'space-around' })};
    `}
  }

  [class*='Col'] {
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
    height: auto;
    margin-bottom: 1rem;

    ${media.greaterThan('tablet')`
      max-width: 30%;
      max-height: 230px;
    `}
  }

  .galleryImg {
    padding: 0;
    margin: 0;
    width: 100%;
    max-height: 350px;
    ${setRadius({ allPx: 12 })};
    box-shadow: ${setShadow('medium')};

    ${media.greaterThan('tablet')`
      max-height: 230px;
    `}
  }
`
