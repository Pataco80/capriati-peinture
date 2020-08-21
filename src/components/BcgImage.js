import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'

const Bcgimage = ({className, fluid, children}) => {
  return (
    <BackgroundImage
          Tag="div"
          className={className}
          fluid={fluid}
          backgroundColor={`#fff`}
        >
          {children}
        </BackgroundImage>
  )
}


export default styled(Bcgimage)`
min-height: ${(props) => (props.home ? "calc(100vh - 62px)" : "50vh")};
  
  background-position: center;
  background-size: cover;
  ${setFlex()};
  align-self:stretch;
  justify-content: center;
  align-items: center;`
