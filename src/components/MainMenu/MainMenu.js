import React from 'react'

// Import styles from styled-components file
import * as S from './MainMenuStyled'

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
const MainMenu = (props) => {
  // Component Variables
  const { isOpen, className } = props
  // Render Compoent
  return (
    <S.MainNavMenu className={className}>
      {linksList.map((itemLink) => {
        // Links Variables
        const { id, label, path } = itemLink

        // Return Navigation links
        return (
          <S.MainNavItem key={id}>
            <S.MainNavLink
              className={isOpen ? `topBarOpen` : ``}
              to={path}
              title={`Aller à la page ${label}`}
              fade='true'
              duration={1}
              hex='#ffffff'
            >
              <span className='span'>{label}</span>
            </S.MainNavLink>
          </S.MainNavItem>
        )
      })}
    </S.MainNavMenu>
  )
}

export default MainMenu
