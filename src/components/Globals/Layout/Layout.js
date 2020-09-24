import React, { useState, useEffect}from 'react'
import PropTypes from 'prop-types'
// Import components from Gatsby and plugins Gatsby


// Import Components for App
import MainNavigation from '../../MainNavigation/MainNavigation'
import Footer from '../Footer'

// Import styled-components and helpers
import GlobalStyles from '../../../theme/globalStyles'
import * as S from './LayoutStyled'

//import useScrollVertical from '../hooks/useScrollVertical'

// Component
const Layout = ({ children }) => {
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

    document.addEventListener('scroll', handleScroll, {passive: true})

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Render Component
  return (
    <>
      <GlobalStyles/>
      <S.AppWrapper>
        <MainNavigation toScroll={scrolled}/>
        <S.PageContainer className={scrolled ? `isScroll` : ``}>
          {children}
        </S.PageContainer>
        <Footer/>
      </S.AppWrapper>
    </>
  )
}

// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
