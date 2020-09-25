import React from 'react'

// Import Components for App
import BcgImage from './BcgImage'
import VideoBcg from './VideoBcg'
import BannerHome from './BannerHome/BannerHome'
import Banner from './Banner'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'

// Component
const Hero = (props) => {

  // Component Variables
  const { home, error, title, bcgImage, children } = props

  // Render Component
  return (
    <>
      {home ?
        <HeroWrapper home={home}>
          <VideoBcg />
          <BannerHome/>
        </HeroWrapper>
      :
        <HeroWrapper error={error}>
          <BcgImage fluid={bcgImage} error={error}>
            <Banner title={title}>
              {children}
            </Banner>
          </BcgImage>
        </HeroWrapper>
      }
    </>
  )
}

// Styles from styled-components
const HeroWrapper = styled.section`
  min-height:${props => (props.home || props.error ? "calc(100vh - 62px)" : "50vh")};
  position: relative;
  ${setFlex({flDir:'column'})};
  width:100vw;
  overflow:hidden;
  flex-wrap:nowrap;
`

export default Hero