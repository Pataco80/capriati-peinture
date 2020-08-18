import React from 'react'

// Import components from Gatsby and plugins Gatsby

// Import Components for App
import MainMenu from './NavBar/links'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import {Section, SectionCenter} from './styledElements/SectionStyled'
import { setColor } from '../theme/helpers'

// GraphQl Queries

// Component
const Footer = () => {
  // Component Variables

  // Render Component
  return (
    <FooterWrapper>
      <Section>
        immage de pied de page
      </Section>
      <SectionCenter background='transparent'>
        <MainMenu className='footer'/>
      </SectionCenter>
    </FooterWrapper>
  )
}

// React PropTypes and more...


// Styles for the component
const FooterWrapper = styled.footer`
  background-color:${setColor.primaryColor};
`

export default Footer
