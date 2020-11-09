import React from 'react'

// Import components from Gatsby and plugins Gatsby
import BackgroundImage from 'gatsby-background-image'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, setColor, setLinearBcg } from '../theme/helpers'

// Component
const Bcgimage = ({ className, fluid, children, error }) => {
  // Render Component
  return (
    <BackgroundImage
      Tag="div"
      className={className}
      fluid={fluid}
      backgroundColor={setColor.mainWhite}>
      {error ? <span className="overlay" /> : ''}
      {children}
    </BackgroundImage>
  )
}

export default styled(Bcgimage)`
  min-height: ${props => (props.home || props.error ? 'calc(100vh - 62px)' : '50vh')};
  background-position: center;
  background-size: cover;
  ${setFlex()};
  align-self: stretch;
  justify-content: center;
  align-items: center;

  .overlay {
    display: block;
    width: 100%;
    height: 100vh;
    ${setLinearBcg({ colStart: 'rgba(0,0,0,0.7)', colEtart: 'rgba(0,0,0,0.2)' })};
    opacity: 0.3;
    z-index: -10;
    position: absolute;
  }
`
