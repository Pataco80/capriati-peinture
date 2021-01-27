import React, {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect';

// Import Components for App
import {Phone, MailSend,Map} from '@styled-icons/boxicons-regular'
import { SunOutline as Sun } from '@styled-icons/evaicons-outline/SunOutline'
import { MoonOutline as Moon } from '@styled-icons/evaicons-outline/MoonOutline'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import {ToTopBtn} from '@components'

// Import Styles
import * as S from './BtnBarStyled'
import getThemeColor from '../../utils/getThemeColor'
import useDeviceDetect from '../../hooks/useDeviceDetect'

// Component
const MenuBar = () => {
  // Variables pour la fonctionalité de theme

  // Utiliser useState avant le contrôle de la variable is"Name"theme
  const [theme, setTheme] = useState(null)

  const isDarkTheme = theme === 'dark'
  const {isMobile} = useDeviceDetect()


  // Utiliser le useEffect remplace la fonctionalité componentDidMount. Laisser un array vide à la fin pour ne pas répéter la fonctionalité et causer une erreur.
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  // Render Component
  return(
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
          <S.MenuBarItem>
            <Phone/>
          </S.MenuBarItem>
          <S.MenuBarItem>
            <MailSend/>
          </S.MenuBarItem>
          <S.MenuBarItem>
            <Map/>
          </S.MenuBarItem>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title='Theme Light / Dark' onClick={() => {
            window.__setPreferredTheme(isDarkTheme ? 'light' : 'dark')
          }}>
            {isDarkTheme ? <Sun /> : <Moon />}
        </S.MenuBarItem>
        {!isMobile && <ToTopBtn showBelow={300}/>}
        {isMobile && <ToTopBtn/>}
       
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}


export default MenuBar
