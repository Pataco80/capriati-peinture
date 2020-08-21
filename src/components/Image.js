import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
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
    <ImageFluidWrapper maxWidth={maxWidth}>
      <Img fluid={fluid} alt={alt}/>
    </ImageFluidWrapper>
  )
}
else {
  return <p>pas d'image</p>
}
}

const ImageFixedWrapper = styled.div`
  width: ${props => props.width ? props.width : '100%'};
`

const ImageFluidWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
`


export default Image
