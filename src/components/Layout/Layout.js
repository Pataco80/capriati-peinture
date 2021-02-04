import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Import Components for App
import { NavBarMenu, Footer, BtnBar } from '@components'

// Import styles from styled-components file and helpers
import * as S from './LayoutStyled'
import GlobalStyles from '../../theme/globalStyles'

// Component
const Layout = ({ children, background }) => {
  // Component Variables
  const [scrolled, setScrolled] = useState(false)

  // Hooks Effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
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
