import React, { useState } from 'react'

// Import Hooks
import useDeviceDetect from '@hooks/useDeviceDetect'

// Import Components for App
import { ToTopBtn, ContactMenu, ShareMenu, ShareMenuBtn } from '@components'

// Import styles from styled-components file
import * as S from './BtnBarStyled'

// Component
const BtnBar = () => {
  // component variables
  const { isMobile } = useDeviceDetect()
  const [isOpen, setIsOpen] = useState(false)

  // Component functions
  const showSocialMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  // Render Componentv
  return (
    <S.BtnBarWrapper>
      {isMobile && (
        <S.MobileWrapper>
          <S.MenuMobileCantainer className={isOpen ? `show-nav` : ``}>
            <ShareMenu />
          </S.MenuMobileCantainer>
          <S.ButtonsContainer>
            <ContactMenu />
            <ShareMenuBtn isOnClick={showSocialMenu} className='btnIconBar' />
            <ToTopBtn className='btnIconBar' />
          </S.ButtonsContainer>
        </S.MobileWrapper>
      )}
      {!isMobile && (
        <S.DesktopWrapper>
          <S.MenuDesktopCantainer className={isOpen ? `show-nav` : ``}>
            <ShareMenu isOpen={isOpen} className='desktop' />
            <S.ButtonsContainer className='desktop'>
              <ShareMenuBtn
                isOnClick={showSocialMenu}
                className='btnIconBar to-social'
              />
              <ToTopBtn showBelow={500} className='btnIconBar to-top' />
            </S.ButtonsContainer>
          </S.MenuDesktopCantainer>
        </S.DesktopWrapper>
      )}
    </S.BtnBarWrapper>
  )
}

export default BtnBar
