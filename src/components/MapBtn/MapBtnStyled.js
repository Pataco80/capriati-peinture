import styled from 'styled-components'

// Import StyledElements for basic styles
import { Button } from '@styledElements/ButtonsStyled'

// Import helpers
import { setTransition, setColor } from '@helpers'

// Export Styles for the component
export const MapButton = styled(Button)`
  background: transparent;

  padding: 0.25rem;
  border: none;
  ${setTransition()};
  width: 3rem;
  height: auto;
  color: ${setColor.mainWhite};

  &:hover {
    background: ${setColor.primaryColor};
    border-radius: inherit;
  }
  &:focus,
  &:active {
    outline: none;
  }
`
