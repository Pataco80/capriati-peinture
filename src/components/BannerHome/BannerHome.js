import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// Import Components for App
import { Title } from '@components'

// Import styles from styled-components file
import * as S from './BannerHomeStyled'

// GraphQl Queries
const getImage = graphql`
  {
    logoImg: file(relativePath: { eq: "images/logos/logoCapriati.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Component
const Bannerhome = () => {
  // Component Variables
  const { logoImg } = useStaticQuery(getImage)

  // Render Component
  return (
    <S.BannerWrapper>
      <S.LogoWrapper>
        <Img fluid={logoImg.childImageSharp.fluid} alt="Logo Capriati S.A." />
      </S.LogoWrapper>
      <S.LayoutSection>
        <Title tag="h1" title="Bienvenue chez Capriati S.A." hidden />
        <S.Description>
          <S.Text className="h4">Entreprise de peinture familiale depuis 1979</S.Text>
        </S.Description>
        <S.CallActionBtn
          secondary="true"
          to="/services/"
          title="Voir nos Services"
          fade
          duration={1}
          hex="#ffffff">
          Nos Services
        </S.CallActionBtn>
        <S.CallActionBtn
          primary="true"
          to="/contact/"
          title="Nous contacter"
          fade
          duration={1}
          hex="#ffffff">
          Nous Contacter
        </S.CallActionBtn>
      </S.LayoutSection>
    </S.BannerWrapper>
  )
}

export default Bannerhome
