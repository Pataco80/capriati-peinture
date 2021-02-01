import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section } from '@styledElements/SectionStyled'

// Import helpers
import { setFlex } from '@helpers'

// Export Styles for the component
export const HistoryWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background:var(--mediumBackground);
`
