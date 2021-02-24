import styled from 'styled-components'

// Import StyledElements for basic styles
import { ButtonLink } from '@styledElements/ButtonsStyled'

// Import helpers
import { setFlex } from '@helpers'

// Export Styles for the component
export const ContactMenuWrapper = styled.div`
  ${setFlex({ x: 'flex-start' })};
`

export const ContactMenuLink = styled(ButtonLink)`
  color: white;
`
