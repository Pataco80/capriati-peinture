import styled from 'styled-components'

// Import helpers
import { setColor } from '@helpers'

// Export Styles for the component
export const FooterWrapper = styled.footer`
  background-color: ${setColor.primaryColor};
`

export const Copyright = styled.p`
  margin: 2rem 0 0 0;
  color: ${setColor.mainWhite};
  text-align: center;
  margin-bottom:1rem;
`
