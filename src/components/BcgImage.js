import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { setFlex, setLinearBcg } from '../theme/helpers'

const Bcgimage = ({className, fluid, children, error }) => {
  return (
    <BackgroundImage
          Tag="div"
          className={className}
          fluid={fluid}
          backgroundColor={`#fff`}
        >
          {
            error ? <span className='overlay' /> : ''
          }
          
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
  align-items: center;
  
  .overlay {
  display: block;
  width:100%;
  height:100vh;
  ${setLinearBcg({colStart:'rgba(0,0,0,0.7)',colEtart:'rgba(0,0,0,0.2)'})};
  opacity:0.3;
  z-index:-10;
  position:absolute;
}
  
`