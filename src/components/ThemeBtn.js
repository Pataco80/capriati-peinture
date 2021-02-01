import React, {useState, useEffect} from 'react'

// Import Components for App
import { SunOutline as Sun } from '@styled-icons/evaicons-outline/SunOutline'
import { MoonOutline as Moon } from '@styled-icons/evaicons-outline/MoonOutline'

// Import Styles
import styled from 'styled-components'
import {Button} from '@styledElements/ButtonsStyled'

// Import helpers
import { setTransition, setPxToRem, setShadow, setColor } from '@helpers'
import getThemeColor from '../utils/getThemeColor'

// Component
const ThemeBtn = ({className}) => {
  // Variables pour la fonctionalité de theme

  // Utiliser useState avant le contrôle de la variable is"Name"theme
  const [theme, setTheme] = useState(null)
  const isDarkTheme = theme === 'dark'
  // Utiliser le useEffect remplace la fonctionalité componentDidMount. Laisser un array vide à la fin pour ne pas répéter la fonctionalité et causer une erreur.
  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])


  // Render Component
  return(
    <Button className={className} title='Theme Light / Dark' onClick={() => {
            window.__setPreferredTheme(isDarkTheme ? 'light' : 'dark')
          }}>
            {isDarkTheme ? <Sun /> : <Moon />}
    </Button>
  )
}


export default ThemeBtn

export const ThemeButton = styled(Button)`
background:transparent;

padding: 0.25rem;
  border: none;
  ${setTransition()};
  width:3rem;
  height:auto;
  color: ${setColor.mainWhite};

  &:hover {
    background: ${setColor.primaryColor};
    border-radius:inherit;
  }
  &:focus,
  &:active {
    outline: none;
  }
`