import React, { useState } from 'react'

// Import Hooks
import useWindowSize from '../../hooks/useWindowSize'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// Import Components for App
import MainMenu from './links'
import { MenuAlt3 } from '@styled-icons/heroicons-outline/MenuAlt3'
import { X } from '@styled-icons/heroicons-outline/X'

// Import styled-components and helpers
import * as S from './MainNavigationStyled'
import { breakpoints } from '../../theme/helpers'

// GraphQl Queries
const getImage = graphql`
  {
    logoMenu: file(relativePath: { eq: "images/top-bar-logo.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

// Component
const MainNavigation = ({ toScroll }) => {
  // Component Variables
  const { logoMenu } = useStaticQuery(getImage)
  const [isOpen, setNav] = useState(false)
  const windowSize = useWindowSize()
  const toNavBarMenu = breakpoints.lgTablet

  // Component Functions
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  // Render Compoent
  return (
    <S.NavBarWrapper role="navigation" aria-label="Navigation Principale" data-active={toScroll}>
      <S.NavBarContainer>
        <S.NavBarHeader>
          <S.NavHeaderContent>
            <S.LogoLink to="/" title="Aller à la page d'Accueil" fade duration={1} hex="#ffffff">
              <Img fixed={logoMenu.childImageSharp.fixed} alt="Logo Capriati SA TopBar" />
            </S.LogoLink>
            <S.NavbarToggle onClick={toggleNav}>{isOpen ? <X /> : <MenuAlt3 />}</S.NavbarToggle>
          </S.NavHeaderContent>
        </S.NavBarHeader>
        {windowSize < toNavBarMenu ? (
          <S.NavBarMenuDropdown className={isOpen ? `show-nav` : ``}>
            <MainMenu isOpen={isOpen} />
          </S.NavBarMenuDropdown>
        ) : (
          <S.NavBarMenu>
            <MainMenu />
          </S.NavBarMenu>
        )}
      </S.NavBarContainer>
    </S.NavBarWrapper>
  )
}

export default MainNavigation
