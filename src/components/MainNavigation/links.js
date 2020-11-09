import React from 'react'

// Import components from Gatsby and plugins Gatsby

// Import Components for App
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Import styled-components and helpers
import styled from 'styled-components'
import {
  layout,
  media,
  setFlex,
  setTransition,
  setPxToRem,
  setColor,
  setBorder,
} from '../../theme/helpers'

// Constants from the links list
const linksList = [
  {
    id: 1,
    label: 'Accueil',
    path: '/',
  },
  {
    id: 2,
    label: 'A Propos',
    path: '/about/',
  },
  {
    id: 3,
    label: 'Services',
    path: '/services/',
  },
  {
    id: 4,
    label: 'Nos Travaux',
    path: '/works/',
  },
  {
    id: 5,
    label: 'Contact',
    path: '/contact/',
  },
]

// Component
const MainMenu = ({ isOpen, className }) => {
  // Render Compoent
  return (
    <MainNavMenu className={className}>
      {linksList.map(itemLink => {
        // Links Variables
        const { id, label, path } = itemLink

        // Return Navigation links
        return (
          <MainNavItem key={id}>
            <MainNavLink
              className={isOpen ? `topBarOpen` : ``}
              to={path}
              title={`Aller à la page ${label}`}
              fade
              duration={1}
              hex="#ffffff">
              <span className="span">{label}</span>
            </MainNavLink>
          </MainNavItem>
        )
      })}
    </MainNavMenu>
  )
}

// Styles from styled-components
const MainNavItem = styled.li`
  width: 100%;

  ${media.greaterThan('lgTablet')`
    width: auto;
    height: auto;
  `}
`

const MainNavLink = styled(AniLink)`
  ${setFlex()};
  align-content: center;
  position: relative;
  padding: ${setPxToRem(6)} ${setPxToRem(16)} ${setPxToRem(4)} ${setPxToRem(16)};
  width: 100%;
  ${setTransition({ delay: 0.2, duration: 0.8 })};
  height: 50px;
  opacity: 0;
  color: ${setColor.primaryColor};
  text-transform: uppercase;
  text-decoration: underline;

  &.topBarOpen {
    opacity: 1;
    transition: none;
  }

  ${media.greaterThan('lgTablet')`
    padding: ${setPxToRem(0)} ${setPxToRem(16)} ${setPxToRem(0)} ${setPxToRem(16)};
    opacity: 1;
    transition: none;
    height: 40px;
  `}

  & .span {
    border-bottom: none;
    line-height: initial;
  }
`

const MainNavMenu = styled.ul`
  ${layout()};
  ${setFlex({ flDir: 'column' })};

  & ${MainNavLink} {
    color: ${setColor.primaryColor};
    text-decoration: none;

    &:hover {
      color: ${setColor.primaryColorD2};
    }

    &[aria-current] {
      color: ${setColor.primaryColorD2};
    }
    & .span:hover,
    &[aria-current] .span {
      border-bottom: ${setBorder({ size: 2, style: 'solid', color: `${setColor.primaryColorD2}` })};
    }
  }

  ${media.greaterThan('lgTablet')`
    ${setFlex({ flDir: 'row', x: 'flex-end' })};
    height: auto;
    position: relative;
    top: 0;
    transition: none;
  `}

  &.footer {
    ${setFlex({ wrap: 'wrap' })};

    & ${MainNavItem} {
      width: auto;
    }

    & ${MainNavLink} {
      opacity: 1;
      width: auto;
      transition: none;
      color: ${setColor.mainWhite};

      & .span:hover,
      &[aria-current] .span {
        border-bottom: ${setBorder({ size: 2, style: 'solid', color: `${setColor.mainWhite}` })};
      }
    }
  }
`

export default MainMenu
