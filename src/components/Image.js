import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'


const Image = ({ fluid, fixed, alt, width, height }) => {
  if(fluid) {
    return <Img fluid={fluid} alt={alt} width={width} height={height} />
  }
  if(fixed) {
    return <Img fixed={fixed} alt={alt} width={width} height={height} />
  }
}

const Img = styled(Img)`
  width:100%;
`

export default Image