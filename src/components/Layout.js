import React, { useState, useEffect}from 'react'
import PropTypes from 'prop-types'

// Import components from Gatsby and plugins Gatsby


// Import Components for App
import NavBar from './NavBar'
//import Footer from '../Footer'

// Import styled-components and helpers
import styled from 'styled-components'
import GlobalStyles from '../theme/globalStyles'
import { setColor, layout, setPxToRem } from '../theme/helpers'

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
        <NavBar toScroll={scrolled}/>
        <PageContainer className={scrolled ? `isScroll` : ``}>{children}</PageContainer>
      </AppWrapper>
      
    </>
  )
}


// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const AppWrapper = styled.div`
  background-color: ${setColor.mainWhite};
  width:100vw;
`

const PageContainer = styled.div`
  min-height:3000px;

  &.isScroll {
    margin-top:${setPxToRem(70)};
  }
`


export default Layout
