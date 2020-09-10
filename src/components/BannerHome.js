import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


// Import Components for App
import Title from './Title'
import { Banner } from './styledElements/BannerStyled'
import { GatsbyButtonLink } from './styledElements/Button'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media, setShadow, setColor } from '../theme/helpers'

// GraphQl Queries
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









// Component
const Bannerhome = () => {
  // Component Variables
  const { logoImg } = useStaticQuery(getImage)
  
  // Render Component
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

// React PropTypes and more...


// Styles from styled-components
const BannerWrapper = styled(Banner)`
  ${setFlex({flDir:'column'})};
  align-self:stretch;
  background-color:silver;

  ${media.greaterThan('smTablet')`
    ${setFlex({flDir:'column', x:'flex-start', y:'space-around'})};
    flex-direction:column;
  `}

  ${media.greaterThan('lgTablet')`
    padding:2rem 4rem;
  `}

  ${media.greaterThan('desktop')`
    padding:6rem;
  `}
`

const LayoutSection = styled.div`
  ${layout()};
  ${setFlex({flDir:'column', x:'center',y:'center'})};
  align-content:flex-end;
  position:relative;
  padding-bottom:4rem;
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

export default Bannerhome
