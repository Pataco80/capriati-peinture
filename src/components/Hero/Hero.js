import React from 'react'
import PropTypes from 'prop-types'

// Import Components for App
import { Banner, BannerHome, BcgImage, VideoBcg } from '@components'

// Import styles from component styled file
import * as S from './HeroStyled'

// Component
const Hero = (props) => {
  // Component variables
  const { home, error, title, bcgImage, altBcgImage, children } = props
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

// React PropTypes and more...
BcgImage.defaultProps = {
  home: false.toString(),
  error: false.toString(),
  altBcgImage: `Arière-plan du Hero`,
}

BcgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  altBcgImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  home: PropTypes.bool.toString(),
  error: PropTypes.bool.toString(),
}
export default Hero
