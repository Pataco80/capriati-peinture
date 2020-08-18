import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { Link } from 'gatsby'

// Import Components for App

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, media, setFlex, setTransition, setPxToRem, setColor } from '../../theme/helpers'

// Constants from the links list
const linksList = [
  {
    id:1,
    label: 'Accueil',
    path: '/'
  },
  {
    id:2,
    label: 'A Propos',
    path: '/about/'
  },
  {
    id:3,
    label: 'Services',
    path: '/services/'
  },
  {
    id:4,
    label: 'Nos Travaux',
    path: '/works/'
  },
  {
    id:5,
    label: 'Contact',
    path: '/contact/'
  },
]
 
// Component
const MainMenu = ({isOpen, className}) => {
  // Component Variables

  // Render Compoent
  return(
    <MainNavMenu className={className}>
      {linksList.map((itemLink) => {
        const {id, label, path} = itemLink
        return (
          <MainNavItem key={id}>
            <MainNavLink className={isOpen ? `topBarOpen`:``} to={path}>{label}</MainNavLink>
          </MainNavItem>
        )
      })}
    </MainNavMenu>
  )
}


// React PropTypes and more...


// Styles from styled-components
const MainNavItem = styled.li`
  width:100%;

  ${media.greaterThan('tablet')`
    width:auto;
    height:auto;
  `}
`

const MainNavLink = styled(Link)`
  ${setFlex()};
  position:relative;
  padding: ${setPxToRem(12)} ${setPxToRem(16)};
  width:100%;
  ${setTransition({delay:0.2, duration:0.8})};
  height:50px;
  opacity:0;
  color: ${setColor.primaryColor};

  &.topBarOpen {
    opacity:1;
    transition:none;
  }

  &:hover {
    color: ${setColor.primaryDarken2};
  }

  &[aria-current] {
    color: ${setColor.primaryDarken2};
    text-decoration: underline;
  }

  ${media.greaterThan('tablet')`
    padding: ${setPxToRem(0)} ${setPxToRem(16)};
    transition:none;
    opacity:1;
    transition:none;
  `}
`

const MainNavMenu = styled.ul`
  ${layout()};
  ${setFlex({flDir:'column'})};

  ${media.greaterThan('tablet')`
    ${setFlex({x:'flex-end'})};
    height:auto;
    position:relative;
    top:0;
    transition:none;

    & ${MainNavLink} {
      color: ${setColor.primaryColor};
    }
  `}

  &.footer {
    ${setFlex({wrap:'wrap'})};

    & ${MainNavItem} {
      width:auto;
    }

    & ${MainNavLink} {
      opacity:1;
      width:auto;
      transition:none;
      color: ${setColor.mainWhite};
    }
  }
`

export default MainMenu