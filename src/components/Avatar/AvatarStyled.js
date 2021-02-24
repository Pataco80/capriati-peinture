import styled from 'styled-components'

// Import components from Gatsby
import Img from 'gatsby-image'

// Import helpers
import { setRadius, setShadow } from '@helpers'

// Export Styles for the component
export const AvatarImage = styled(Img)`
  width: 100%;
  max-width: 250px;
  ${setRadius({ allPc: 50 })};
  box-shadow: ${setShadow('light')};
`
