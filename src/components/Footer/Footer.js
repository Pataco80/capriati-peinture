import React from 'react'

// Import Hooks
import useDeviceDetect from '@hooks/useDeviceDetect'
import useSiteMetadata from '@hooks/useSiteMetadata'

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
  }
`

// Component
const Footer = ({ background }) => {
  // Component Variables
  const { footerImg } = useStaticQuery(getData)
  const { copyright, conceptorWebSite } = useSiteMetadata()
  const { isMobile } = useDeviceDetect()
  // Render Component
  return (
    <S.FooterWrapper paddingBottom={isMobile ? `3rem` : `0`}>
      <Section padding='0' background={background}>
        <Img fluid={footerImg.childImageSharp.fluid} alt='Banière colorée' />
      </Section>
      <SectionCenter background='transparent'>
        <MainMenu className='footer' />
        <S.Text>{copyright} - Tous droits réservés.</S.Text>
        <S.Text>Site développé par {conceptorWebSite}</S.Text>
      </SectionCenter>
    </S.FooterWrapper>
  )
}

export default Footer
