import React from 'react'
import PropTypes from 'prop-types'
// Import React Hooks
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title, Avatar } from '@components'

// Import styles from styled-components file and helpers
import * as S from './AboutStyled'
import { setColor } from '@helpers'

// GraphQl Queries
export const getData = graphql`
  {
    profilImage: file(
      relativePath: { eq: "images/familly/vincentCapriati.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// Component
const About = (props) => {
  // Component Variables
  const { home } = props
  const { profilImage } = useStaticQuery(getData)
  const { bossName, bossPosition } = useSiteMetadata()

  // Render Component
  return (
    <S.AboutWrapper>
      {home ? <Title tag='h2' title='A Propos de Nous' /> : ''}
      <S.AboutContent>
        <S.AboutArticle>
          <p>
            Bienvenue chez Capriati S.A, entreprise familiale spécialisée dans
            les travaux d’entretien et de rénovation depuis plus de 40 ans.
          </p>
          <p>
            Bénéficiant d’une solide expérience afin de satisfaire à vos
            exigences pour une prestation de qualité, notre équipe de
            professionnels qualifiés, motivés et passionnés se tient à votre
            disposition pour vous accompagner à la réalisation de vos projets.
          </p>
        </S.AboutArticle>
        <S.AboutAuthorContainer>
          <S.AuthorImgContainer>
            <Avatar fluid={profilImage.childImageSharp.fluid} alt={bossName} />
          </S.AuthorImgContainer>

          <S.AuthorName className='h5'>{bossName}</S.AuthorName>
          <small>{bossPosition}</small>
        </S.AboutAuthorContainer>
      </S.AboutContent>
      {home ? (
        <S.AboutLink
          primary='true'
          to='/about/'
          title='Aller à la page À Propos de Nous'
          fade
          duration={1}
          hex={setColor.mainWhite}
        >
          En savoir plus
        </S.AboutLink>
      ) : (
        ''
      )}
    </S.AboutWrapper>
  )
}

// React PropTypes and more...

About.propTypes = {
  home: PropTypes.bool.toString(),
}

export default About
