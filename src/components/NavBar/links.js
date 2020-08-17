import React from 'react'
import * as S from './styled'
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
 
const NavBarItems = linksList.map((itemLink) => {
  const {id, label, path} = itemLink
  return (
    <S.NavBarItem key={id}>
      <S.NavBarLink to={path}>{label}</S.NavBarLink>
    </S.NavBarItem>
  )
})

export default ({className}) => {
  return(
    <S.NavBarMenu className={className}>
      {NavBarItems}
    </S.NavBarMenu>
  )
}