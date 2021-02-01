import React, {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect';

// Import Components for App
import {Phone, MailSend,Map} from '@styled-icons/boxicons-regular'
import { SunOutline as Sun } from '@styled-icons/evaicons-outline/SunOutline'
import { MoonOutline as Moon } from '@styled-icons/evaicons-outline/MoonOutline'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import {ToTopBtn, ThemeBtn} from '@components'

// Import Styles
import * as S from './BtnBarStyled'
import {Button} from '@styledElements/ButtonsStyled'
import getThemeColor from '../../utils/getThemeColor'
import useDeviceDetect from '../../hooks/useDeviceDetect'

// Component
const MenuBar = () => {
  // Variables pour la fonctionalité de theme

  // Utiliser useState avant le contrôle de la variable is"Name"theme
  //const [theme, setTheme] = useState(null)

  //const isDarkTheme = theme === 'dark'
  const {isMobile} = useDeviceDetect()


  // Utiliser le useEffect remplace la fonctionalité componentDidMount. Laisser un array vide à la fin pour ne pas répéter la fonctionalité et causer une erreur.
{/*  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])*/}

  // Render Component
  return(
<>
    {isMobile &&
        <S.MobileWrapper>
      <S.MenuBarGroup>
          <Button className="btnIconBar">
            <Phone/>
          </Button>
          <Button className="btnIconBar">
            <MailSend/>
          </Button>
          <Button className="btnIconBar">
            <Map/>
          </Button>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <ThemeBtn className="btnIconBar"/>
        <ToTopBtn className="btnIconBar"/>
      </S.MenuBarGroup>
    </S.MobileWrapper>
    }
    {!isMobile &&
        <S.DesktopWrapper>
      <S.MenuBarGroup className="desktop">
        <ToTopBtn showBelow={500} className="btnIconBar"/>
        <ThemeBtn className="btnIconBar"/>
      </S.MenuBarGroup>
    </S.DesktopWrapper>
    }
    </>
  )
}

export default MenuBar
