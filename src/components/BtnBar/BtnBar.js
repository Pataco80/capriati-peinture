import React, { useState } from 'react'

// Import Hooks
import useDeviceDetect from '@hooks/useDeviceDetect'

// Import Components for App
import { ToTopBtn, ContactMenu } from '@components'

// Import styles from styled-components file
import * as S from './BtnBarStyled'

// Component
const BtnBar = ({ currentPage }) => {
  // component variables
  const { isMobile } = useDeviceDetect()
  const [isOpen, setIsOpen] = useState(false)

  // Component functions
  const showSocialMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  //console.log(`je suis sur la barre de bouttons:${currentPage}`)
  // Render Componentv
  return (
    <S.BtnBarWrapper>
      {isMobile && (
        <S.MobileWrapper>
          <S.ButtonsContainer>
            <ContactMenu />
            <ToTopBtn className='btnIconBar' />
          </S.ButtonsContainer>
        </S.MobileWrapper>
      )}
      {!isMobile && (
        <S.DesktopWrapper>
          <S.MenuDesktopCantainer className={isOpen ? `show-nav` : ``}>
            <S.ButtonsContainer className='desktop'>
              <ToTopBtn showBelow={500} className='btnIconBar to-top' />
            </S.ButtonsContainer>
          </S.MenuDesktopCantainer>
        </S.DesktopWrapper>
      )}
    </S.BtnBarWrapper>
  )
}

export default BtnBar
