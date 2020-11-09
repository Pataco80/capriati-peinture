import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Import Components for App
import MainNavigation from '../MainNavigation/MainNavigation'
import Footer from './Footer'

//import useScrollVertical from '../hooks/useScrollVertical'

// Import styled-components and helpers
import styled from 'styled-components'
import GlobalStyles from '../../theme/globalStyles'
import { setColor, setFlex, setPxToRem } from '../../theme/helpers'

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
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Render Component
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <MainNavigation toScroll={scrolled} />
        <PageContainer className={scrolled ? `isScroll` : ``}>{children}</PageContainer>
        <Footer />
      </AppWrapper>
    </>
  )
}

// Styles from styled-components
const AppWrapper = styled.div`
  background-color: ${setColor.mainWhite};
  width: 100vw;
  min-height: 100vh;
`

const PageContainer = styled.main`
  ${setFlex({ flDir: 'column' })};
  z-index: 2;

  &.isScroll {
    margin-top: ${setPxToRem(62)};
  }
`

// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
