import React, { useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

// Import components from Gatsby and plugins Gatsby
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

// Import Components for App
import MainMenu from './links'
import {MenuAlt3} from '@styled-icons/heroicons-outline/MenuAlt3'
import {X} from '@styled-icons/heroicons-outline/X'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, media, setFlex, setTransition, setPxToRem, setShadow, setBorder, setColor, breakpoints } from '../../theme/helpers'


// GraphQl Queries
const getImage = graphql`
  {
    logoMenu: file(relativePath: {eq: "images/top-bar-logo.png"}) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

// Component
const MainNavigation = ({toScroll}) => {
  // Component Variables
  const { logoMenu } = useStaticQuery(getImage)

  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const windowSize = useWindowSize()
  const toNabBarMenu = breakpoints.lgTablet

  // Render Compoent
  return (
    <NavBarWrapper  data-active={toScroll}>
      <NavBarContainer>
        <NavBarHeader>
          <NavHeaderContent>
          <Img fixed={logoMenu.childImageSharp.fixed} alt="Explore Adventure" />
            <NavbarToggle onClick={toggleNav}>
              {
                isOpen ? <X/> : <MenuAlt3/>
              }
            </NavbarToggle>
          </NavHeaderContent>
        </NavBarHeader>
        {
        windowSize < toNabBarMenu ? 
        <NavBarMenuDropdown className={isOpen ? `show-nav`:``}>
          <MainMenu isOpen={isOpen}/>
        </NavBarMenuDropdown>
        :
        <NavBarMenu>
          <MainMenu />
        </NavBarMenu>
        }
      </NavBarContainer>      
    </NavBarWrapper>
  )
}

// React PropTypes and more...


// Styles from styled-components
const NavBarWrapper = styled.nav`
  ${setFlex()};
  border-bottom: ${setBorder({size:1,style:'solid', color:`${setColor.primaryColor}`})};
  background-color: ${setColor.mainWhite};
  width:100vw;
  position: relative;
  top:0;
  z-index:1000;

  &[data-active='true'] {
    position: fixed;
    ${setShadow('medium')};
    top:0;
  }
`

const NavBarContainer = styled.div`
  ${layout()};

  ${setFlex({flDir:'column'})};
  background-color: ${setColor.mainWhite};
  ${setTransition()};

  ${media.greaterThan('lgTablet')`
    ${setFlex({y:'stretch', wrap:'nowrap'})};
    padding: ${setPxToRem(8)} 0;
  `}
`

const NavBarHeader = styled.div`
  ${setFlex()};
  background-color: ${setColor.mainWhite};
  position:relative;
  top:0;
  width:100%;
  z-index:10;

  ${media.greaterThan('lgTablet')`
    ${setFlex({x:'flex-start'})};
    background-color: ${setColor.mainWhite};
    width:auto;
  `}
`

const NavHeaderContent = styled.section`
  ${setFlex({x:'space-between'})};
  padding: ${setPxToRem(8)} ${setPxToRem(16)};

  ${media.greaterThan('lgTablet')`
    padding: 0 ${setPxToRem(16)};
    max-width:180px;
  `}
`

const NavbarToggle = styled.span`
  color: ${setColor.primaryColor};
  width:40px;
  height:40px;
  ${setTransition()};

  ${media.greaterThan('lgTablet')`
    display:none;
  `}
`

const NavBarMenuDropdown = styled.section`
  top:-256px;
  ${setTransition({duration:0.3})};
  background-color: ${setColor.mainWhite};
  position:relative;
  width:100%;
  height:0;


  &.show-nav {
    height:256px;
    top:0;

    ${media.greaterThan('lgTablet')`
      height:auto;
    `}
  }

  
`

const NavBarMenu = styled.div`
  ${media.greaterThan('lgTablet')`
    ${setFlex({x:'flex-end'})};
    height:auto;
    position:relative;
    top:0;
    transition:none;
  `}
`

export default MainNavigation
