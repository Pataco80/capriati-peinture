import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section } from '@styledElements/SectionStyled'

// Import helpers
import { setFlex, setColor } from '@helpers'

// Export Styles for the component
export const ReferencesWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  padding-bottom: 3rem;
  background: ${setColor.mainGreyL3};
`

export const ReferenceItem = styled.li`
  margin-bottom: 1rem;
`
