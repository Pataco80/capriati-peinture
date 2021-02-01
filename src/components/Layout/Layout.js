import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

//import useScrollVertical from '../hooks/useScrollVertical'

// Import Components for App
import { NavBarMenu, Footer, BtnBar, ToTopBtn } from '@components'

// Import styles from styled-components file and helpers
import * as S from './LayoutStyled'
import GlobalStyles from '../../theme/globalStyles'
import useDeviceDetect from '../../hooks/useDeviceDetect'

// Component
const Layout = ({ children, background }) => {
  // Component Variables
  const [scrolled, setScrolled] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  const {isMobile} = useDeviceDetect()
  const prevScrollY = useRef(0);

  // Hooks Effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
      const currentScrollY = window.scrollY
      if (prevScrollY.current !== currentScrollY) {
        setScrolling(true)
        console.log("is scoll : "+scrolling)
      }
    }
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Render Component
  return (
    <>
      <GlobalStyles />
      <S.AppWrapper>
        <NavBarMenu toScroll={scrolled} />
        
        <S.PageContainer className={scrolled ? `isScroll` : ``}>{children}</S.PageContainer>
        <Footer background={background} />
        <BtnBar />
      </S.AppWrapper>
    </>
  )
}

// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
