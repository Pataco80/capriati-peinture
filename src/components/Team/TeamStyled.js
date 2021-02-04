import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContentCenter } from '@styledElements/SectionStyled'

// Import helpers
import { layout, setFlex, media } from '@helpers'

// Export Styles for the component
export const TeamWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background: var(--mediumBackground);
`

export const TeamContent = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column', y: 'center', wrap: 'nowrap' })};

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({ flDir: 'row', x: 'space-around', y: 'space-around' })};
    align-items: stretch;
  `}
`
