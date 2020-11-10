import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import MainMenu from '../MainNavigation/links'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { Section, SectionCenter } from '../styledElements/SectionStyled'
import { setColor } from '../../theme/helpers'

// GraphQl Queries
const getData = graphql`
  {
    footerImg: file(relativePath: { eq: "images/footerBande.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    siteData: site {
      siteMetadata {
        copyright
      }
    }
  }
`

// Component
const Footer = () => {
  // Component Variables
  const { footerImg, siteData } = useStaticQuery(getData)

  // Render Component
  return (
    <FooterWrapper>
      <Section padding="0">
        <Img fluid={footerImg.childImageSharp.fluid} alt="Banière colorée" />
      </Section>
      <SectionCenter background="transparent">
        <MainMenu className="footer" />
        <Copyright>{`${siteData.siteMetadata.copyright}`} - Tous droits réservés.</Copyright>
      </SectionCenter>
    </FooterWrapper>
  )
}

// Styles from styled-components
const FooterWrapper = styled.footer`
  background-color: ${setColor.primaryColor};
`

const Copyright = styled.p`
  margin: 2rem 0 0 0;
  color: ${setColor.mainWhite};
  text-align: center;
`

export default Footer
