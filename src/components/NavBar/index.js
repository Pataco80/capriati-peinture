import React, { useState } from 'react'

// Import components from Gatsby and plugins Gatsby
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

// Import Components for App
import logo from '../../assets/images/top-bar-logo.png'
import NavMenu from './links'

// Styles from styled-components
import * as S from './styled'

// GraphQl Queries
const getImage = graphql`
  {
    logoMenu: file(relativePath: {eq: "images/top-bar-logo.png"}) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

// Component
const NavBar = ({toScroll}) => {
  // Component Variables
  const { logoMenu } = useStaticQuery(getImage)

  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }



  // Render Compoent
  return (
    <S.NavBarWrapper data-active={toScroll}>
      <S.NavBarContainer>
        <S.NavBarHeader>
          <S.NavHeaderContent>
          <Img fixed={logoMenu.childImageSharp.fixed} alt="Explore Adventure" />
            <S.NavbarToggle onClick={toggleNav}/>
          </S.NavHeaderContent>
        </S.NavBarHeader>
        <NavMenu className={isOpen ? `show-nav`:``} />
      </S.NavBarContainer>
    </S.NavBarWrapper>
  )
}

// React PropTypes and more...

export default NavBar
