import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

// Import Components for App
import MainMenu from './MainNavigation/links'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import {Section, SectionCenter} from './styledElements/SectionStyled'
import { setColor } from '../theme/helpers'

// GraphQl Queries
const getImage = graphql`
  {
    footerImg: file(relativePath: {eq: "images/footerBande.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

// Component
const Footer = () => {
  // Component Variables
  const { footerImg } = useStaticQuery(getImage)


  // Render Component
  return (
    <FooterWrapper>
      <Section padding='0'>
        <Img fluid={footerImg.childImageSharp.fluid} />
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
