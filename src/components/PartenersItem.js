import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import styled-components and helpers
import styled from 'styled-components'
import { media, setFlex } from '../theme/helpers'

// Component
const PartenersItem = (props) => {

  // Component Variables
  const { fluid, altLogo, url, urlTitle } = props

  // Render Component
  return (
    <PartenersItemWrapper href={url} title={urlTitle}>
      <PartenersLogo fluid={fluid} alt={altLogo}/>
    </PartenersItemWrapper>
  )
}


// Styles from styled-components
const PartenersItemWrapper = styled.a`
  ${setFlex({y:'flex-start'})};
  width:100%;
  max-width:30rem;
  margin-bottom:3rem;
  text-align:center;

  ${media.greaterThan('tablet')`
    max-width:45%;
  `}

  ${media.greaterThan('lgTablet')`
    max-width:30%;
  `}

  &:nth-child(2) {
    ${media.greaterThan('lgTablet')`
      order:1;
    `}
  }

  &:last-child {
    margin-bottom:0;
  }
`

const PartenersLogo = styled(Img)`
  max-width:25rem;
`

export default PartenersItem