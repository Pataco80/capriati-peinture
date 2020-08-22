import React from 'react'
import styled from 'styled-components'
import BannerHome from './BannerHome'
import Banner from './Banner'
import { setFlex } from '../theme/helpers'
import VideoBcg from './VideoBcg'
import BcgImage from './BcgImage'
const Herotest = (props) => {
  const {home, title, bcgImage} = props

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

const HeroWrapper = styled.section`
min-height:${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
position: relative;
${setFlex({flDir:'column'})};
width:100vw;
overflow:hidden;
`

export default Herotest
