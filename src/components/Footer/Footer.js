import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { MainMenu } from '@components'

// Import StyledElements for basic styles
import { Section, SectionCenter } from '@styledElements/SectionStyled'

// Import styles from styled-components file
import * as S from './FooterStyled'

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
const Footer = ({ background }) => {
  // Component Variables
  const { footerImg, siteData } = useStaticQuery(getData)

  // Render Component
  return (
    <S.FooterWrapper>
      <Section padding="0" background={background}>
        <Img fluid={footerImg.childImageSharp.fluid} alt="Banière colorée" />
      </Section>
      <SectionCenter background="transparent">
        <MainMenu className="footer" />
        <S.Copyright>{`${siteData.siteMetadata.copyright}`} - Tous droits réservés.</S.Copyright>
      </SectionCenter>
    </S.FooterWrapper>
  )
}

export default Footer
