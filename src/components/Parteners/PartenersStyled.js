import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContentCenter } from '@styledElements/SectionStyled'

// Import helpers
import { media, setFlex, setColor } from '@helpers'

// Export Styles for the component
export const PartenersWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background: ${setColor.mainWhite};
`

export const PartenersLogosContainer = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row', x: 'space-around' })};
  `}
`
