import React, { useState, useEffect}from 'react'
import PropTypes from 'prop-types'

// Import components from Gatsby and plugins Gatsby


// Import Components for App
import MainNavigation from './MainNavigation'
import Footer from './Footer'

// Import styled-components and helpers
import styled from 'styled-components'
import GlobalStyles from '../theme/globalStyles'
import { setColor, setPxToRem } from '../theme/helpers'

// GraphQl Queries

// Component
const Layout = ({ children }) => {
  // Component Variables

  const [scrolled, setScrolled] = useState(false)


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
      <AppWrapper>
        <MainNavigation toScroll={scrolled}/>
        <PageContainer className={scrolled ? `isScroll` : ``}>{children}</PageContainer>
        <Footer/>
      </AppWrapper>
      
    </>
  )
}


// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// Styles from styled-components
const AppWrapper = styled.div`
  background-color: ${setColor.mainWhite};
  width:100vw;
`

const PageContainer = styled.div`
  min-height:3000px;
z-index:2;
  &.isScroll {
    margin-top:${setPxToRem(70)};
  }
`


export default Layout
