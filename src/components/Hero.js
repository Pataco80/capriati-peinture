import React from 'react'
import styled from 'styled-components'
import {setFlex} from '../theme/helpers'
const Hero = (props) => {
  const {children, home} = props
  return (
    <HeroWrapper home={home}>
        {children}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
${setFlex({flDir:'column'})};
overflow:hidden;
position:relative;
width:100%;
z-index:2 !important;
`

export default Hero
