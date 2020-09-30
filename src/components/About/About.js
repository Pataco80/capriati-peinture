import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../Title'
import Avatar from '../Avatar'

// Import styled-components and helpers
import * as S from './AboutStyled'

// GraphQl Queries
export const getImage = graphql`
  {
    profilImage: file(relativePath: {eq: "images/familly/vincentCapriati.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// Component
const About = (props) => {

  // Component Variables
  const { home, background } = props
  const { profilImage } = useStaticQuery(getImage)

  // Render Component
  return (
    <S.AboutWrapper background={background}>
      {
        home ? <Title tag='h2' title='A Propos de Nous' titleSection /> : ''
      }
      <S.AboutContent>
        <S.AboutArticle>
          <p>Bienvenue chez Capriati peinture, entreprise familiale spécialisée dans les travaux d’entretien et de rénovation depuis plus de 40 ans.</p>
          <p>Bénéficiant d’une solide expérience afin de satisfaire à vos exigences pour une prestation de qualité, notre équipe de professionnels qualifiés, motivés et passionnés se tient à votre disposition pour vous accompagner à la réalisation de vos projets. </p>
        </S.AboutArticle>
        <S.AboutImgContainer>
          <Avatar fluid={profilImage.childImageSharp.fluid} alt='Vincent Capriati' />
        </S.AboutImgContainer>
      </S.AboutContent>
      {
        home ? <S.AboutLink primary='true' to='/about/' title='Aller à la page À Propos de Nous'>En savoir plus</S.AboutLink> : ''
      }
    </S.AboutWrapper>
  )
}

export default About