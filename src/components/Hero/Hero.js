import React from 'react'

// Import Components for App
import { Banner, BannerHome, BcgImage, VideoBcg } from '@components'

// Import styles from component styled file
import * as S from './HeroStyled'

// Component
const Hero = ({ home, error, title, bcgImage, altBcgImage, children }) => {
  // Render Component
  return (
    <>
      {home ? (
        <S.HeroWrapper home={home}>
          <VideoBcg />
          <BannerHome />
        </S.HeroWrapper>
      ) : (
        <S.HeroWrapper error={error}>
          <BcgImage fluid={bcgImage} altBcgImage={altBcgImage} error={error}>
            <Banner title={title}>{children}</Banner>
          </BcgImage>
        </S.HeroWrapper>
      )}
    </>
  )
}

export default Hero
