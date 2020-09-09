import React from 'react'

// Import Components for App
import BcgImage from './BcgImage'
import VideoBcg from './VideoBcg'
import BannerHome from './BannerHome'
import Banner from './Banner'

// Import styled-components and helpers

// GraphQl Queries

import styled from 'styled-components'
import { setFlex } from '../theme/helpers'

// Component
const Hero = (props) => {
  // Component Variables
  const {home, title, bcgImage} = props
  
  // Render Component
  return (
    <>
      {home ? 
      <HeroWrapper home={home}>
        <VideoBcg />
        <BannerHome/>
      </HeroWrapper>
      : 
      <HeroWrapper>
        <BcgImage fluid={bcgImage}>
          <Banner title={title}/> 
        </BcgImage>
      </HeroWrapper>
      }
    </>
  )
}

// React PropTypes and more...


// Styles from styled-components
const HeroWrapper = styled.section`
min-height:${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
position: relative;
${setFlex({flDir:'column'})};
width:100vw;
overflow:hidden;
`

export default Hero
