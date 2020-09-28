import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import styled-components and helpers
import styled from 'styled-components'
import { setRadius, setShadow } from '../theme/helpers'

// Component
const Avatar = ({ fluid, alt }) => {

  // Render Component
  return <AvatarImage fluid={fluid} alt={alt} />
}

// Styles from styled-components
const AvatarImage = styled(Img)`
  width:100%;
  max-width: 250px;
  ${setRadius({allPc:50})};
  box-shadow:${setShadow('light')};
`

export default Avatar