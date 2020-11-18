import React from 'react'

// Import Components for App
import { Banner, BannerHome, BcgImage, VideoBcg } from '@components'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { setFlex } from '@helpers'

// Component
const Hero = ({ home, error, title, bcgImage, children }) => {
  // Render Component
  return (
    <>
      {home ? (
        <HeroWrapper home={home}>
          <VideoBcg />
          <BannerHome />
        </HeroWrapper>
      ) : (
        <HeroWrapper error={error}>
          <BcgImage fluid={bcgImage} error={error}>
            <Banner title={title}>{children}</Banner>
          </BcgImage>
        </HeroWrapper>
      )}
    </>
  )
}

// Styles from styled-components
const HeroWrapper = styled.section`
  min-height: ${props => (props.home || props.error ? 'calc(100vh - 56px)' : '50vh')};
  position: relative;
  ${setFlex({ flDir: 'column', wrap: 'nowrap' })};
  width: 100vw;
  overflow: hidden;
`

export default Hero
