import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { setRadius, setShadow } from '../theme/helpers'


const Avatar = ({ fluid, fixed, alt, width, height }) => {
  if(fluid) {
    return <AvatarImage fluid={fluid} alt={alt} width={width} height={height} />
  }
  if(fixed) {
    return <AvatarImage fixed={fixed} alt={alt} width={width} height={height} />
  }
}

const AvatarImage = styled(Img)`
  width:100%;
  max-width: 250px;
  ${setRadius({allPc:50})};
  box-shadow:${setShadow('light')};
`

export default Avatar