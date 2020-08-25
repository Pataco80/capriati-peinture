import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'
const Image = (props) => {
const {fixed, fluid, width, maxWidth, alt} = props
if(props.fixed) {
  return(
    <ImageFixedWrapper width={width}>
      <Img fixed={fixed} alt={alt}/>

    </ImageFixedWrapper>
  )
}
if(props.fluid) {
  return(
    <ImageFluidWrapper width={width} maxWidth={maxWidth}>
      <Img fluid={fluid} alt={alt}/>
      
    </ImageFluidWrapper>
  )
}
else {
  return <p>pas d'image</p>
}
}

const ImageFixedWrapper = styled.div`
  ${setFlex()};
  width: ${props => props.width ? props.width : '100%'};
`

const ImageFluidWrapper = styled.div`
  ${setFlex()};
  align-self:stretch;
  width: ${props => props.width ? props.width : '100%'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};

  .gatsby-image-wrapper {
    flex:auto;
  }
`


export default Image
