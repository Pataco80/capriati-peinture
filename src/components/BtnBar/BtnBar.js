import React from 'react'

// Import Components for App
import { Phone, MailSend, Map } from '@styled-icons/boxicons-regular'
import { ToTopBtn, ThemeBtn, MapBtn } from '@components'

// Import Styles
import * as S from './BtnBarStyled'
import { Button } from '@styledElements/ButtonsStyled'
import useDeviceDetect from '../../hooks/useDeviceDetect'

// Component
const MenuBar = () => {
  // Variables pour la fonctionalité de theme

  // Utiliser useState avant le contrôle de la variable is"Name"theme
  //const [theme, setTheme] = useState(null)

  //const isDarkTheme = theme === 'dark'
  const { isMobile } = useDeviceDetect()

  // Utiliser le useEffect remplace la fonctionalité componentDidMount. Laisser un array vide à la fin pour ne pas répéter la fonctionalité et causer une erreur.
  {
    /*  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])*/
  }

  // Render Component
  return (
    <>
      {isMobile && (
        <S.MobileWrapper>
          <S.MenuBarGroup>
            <Button className="btnIconBar">
              <Phone />
            </Button>
            <Button className="btnIconBar">
              <MailSend />
            </Button>
            <MapBtn className="btnIconBar mapIconBar" />
          </S.MenuBarGroup>
          <S.MenuBarGroup>
            <ThemeBtn className="btnIconBar" />
            <ToTopBtn className="btnIconBar" />
          </S.MenuBarGroup>
        </S.MobileWrapper>
      )}
      {!isMobile && (
        <S.DesktopWrapper>
          <S.MenuBarGroup className="desktop">
            <ToTopBtn showBelow={500} className="btnIconBar btnTop" />
            <ThemeBtn className="btnIconBar" />
          </S.MenuBarGroup>
        </S.DesktopWrapper>
      )}
    </>
  )
}

export default MenuBar
