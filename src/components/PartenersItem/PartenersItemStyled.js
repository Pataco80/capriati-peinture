import styled from 'styled-components'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import helpers
import { media, setFlex } from '@helpers'

// Export Styles for the component
export const PartenersItemWrapper = styled.a`
  ${setFlex({ y: 'flex-start' })};
  width: 70%;
  max-width: 20rem;
  margin-bottom: 3rem;
  text-align: center;

  ${media.greaterThan('tablet')`
    max-width: 45%;
  `}

  ${media.greaterThan('lgTablet')`
    max-width: 30%;
  `}

  &:nth-child(2) {
    ${media.greaterThan('lgTablet')`
      order: 1;
    `}
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const PartenersLogo = styled(Img)`
  max-width: 25rem;
`
