import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContentCenter } from '@styledElements/SectionStyled'

// Import helpers
import { media, setFlex } from '@helpers'

// Export Styles for the component
export const PartenersWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background: var(--lightBackground);
`

export const PartenersLogosContainer = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row', x: 'space-around' })};
  `}
`
