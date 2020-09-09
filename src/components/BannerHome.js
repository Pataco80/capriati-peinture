import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Banner} from './styledElements/BannerStyled'
import Title from './Title'
import {GatsbyButtonLink} from './styledElements/Button'
import { layout, setFlex, media, setShadow, setColor } from '../theme/helpers'


const getImage = graphql`
  {
    logoImg: file(relativePath: {eq: "images/big-logo.png"}) {
      childImageSharp {
        fluid (maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const Bannerhometest = () => {
  const { logoImg } = useStaticQuery(getImage)

  return (
    <BannerWrapper>
      <LogoWrapper>
          <Img fluid={logoImg.childImageSharp.fluid} alt='Logo Capriati S.A.' />
        </LogoWrapper>
        <LayoutSection>
          <Title tag='h1' title='Bienvenue chez Capriati S.A.' hidden />
        <Description>
          <p>Entreprise de peinture familiale depuis 1979</p>
        </Description>
        <CallActionBtn secondary to='/services/'>Nos Services</CallActionBtn>
        <CallActionBtn primary to='/contact/'>Nous Contacter</CallActionBtn>
        </LayoutSection>
    </BannerWrapper>
  )
}

const BannerWrapper = styled(Banner)`
background-color:silver;
flex-direction:column;
align-self:stretch;
${setFlex({flDir:'column'})};

${media.greaterThan('smTablet')`
flex-direction:column;
    ${setFlex({flDir:'column', x:'flex-start', y:'space-around'})};
  `}

  ${media.greaterThan('lgTablet')`
    padding:2rem 4rem;
  `}

  ${media.greaterThan('desktop')`
    padding:6rem;
  `}
`

const LayoutSection = styled.div`
${setFlex({flDir:'column', x:'center',y:'center'})};
align-content:flex-end;
${layout()};
  position:relative;
  padding-bottom:3rem;
  width:100%;
  z-index:2;



  ${media.greaterThan('smTablet')`
    ${setFlex({x:'space-around', y:'space-around'})};
    padding-bottom:8rem;
    align-self:flex-end;
  `}
`

const CallActionBtn = styled(GatsbyButtonLink)`
  ${setShadow('light')};
  text-align:center;
  margin:3rem 0.5rem 0 0.5rem;

  &:hover {
    ${setShadow('dark')};
  }
`

const Description = styled.div`
${setFlex({x:'flex-end', y:'flex-end'})};
  width:100%;


    p {
      color:${setColor.primaryColor};
      text-align:right;
      font-size:1.4rem;
      font-size:1.4rem;
      padding:0 1rem;
      text-shadow: 3px 3px 3px ${setColor.mainBlack};

      ${media.greaterThan('smTablet')`
        font-size: 2.197rem;
        line-height: calc(2.197rem + 1vw);
      `}
    }
`

const LogoWrapper = styled.div`
  ${setFlex({x:'flex-start'})};
  align-self:flex-start;
  width:100%;
  max-width:500px;
  z-index:2;
`




export default Bannerhometest
