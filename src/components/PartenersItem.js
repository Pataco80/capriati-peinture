import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media, setFlex } from '../theme/helpers'

const PartenersItem = (props) => {
  const { fluid, altLogo, url, urlTitle } = props
  return (
    <PartenersItemWrapper href={url} title={urlTitle}>
      <PartenersLogo fluid={fluid} alt={altLogo}/>
    </PartenersItemWrapper>
  )
}

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
