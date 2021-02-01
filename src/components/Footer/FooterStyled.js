import styled from 'styled-components'

// Import helpers
import { setColor,media } from '@helpers'

// Export Styles for the component
export const FooterWrapper = styled.footer`
  background-color: var(--highlight);
  padding-bottom:3rem;

  ${media.greaterThan('tablet')`
    padding-bottom:0;

  `}
`

export const Copyright = styled.p`
  margin: 2rem 0 0 0;
  color: ${setColor.mainWhite};
  text-align: center;
`
