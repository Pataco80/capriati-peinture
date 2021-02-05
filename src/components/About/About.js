import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title, Avatar } from '@components'

// Import styles from styled-components file
import * as S from './AboutStyled'

// GraphQl Queries
export const getData = graphql`
  {
    profilImage: file(relativePath: { eq: "images/familly/vincentCapriati.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bossData: site {
      siteMetadata {
        bossName
        bossPosition
        bossDescription
        bossSlogan
      }
    }
  }
`

// Component
const About = props => {
  // Component Variables
  const { home, about, background } = props
  const { profilImage, bossData } = useStaticQuery(getData)
  const { bossName, bossPosition, bossDescription, bossSlogan } = bossData.siteMetadata

  // Render Component
  return (
    <S.AboutWrapper background={background}>
      {home ? <Title tag="h2" title="A Propos de Nous" titleSection /> : ''}
      <S.AboutContent>
        <S.AboutArticle>
          <p>
            Bienvenue chez Capriati peinture, entreprise familiale spécialisée dans les travaux
            d’entretien et de rénovation depuis plus de 40 ans.
          </p>
          <p>
            Bénéficiant d’une solide expérience afin de satisfaire à vos exigences pour une
            prestation de qualité, notre équipe de professionnels qualifiés, motivés et passionnés
            se tient à votre disposition pour vous accompagner à la réalisation de vos projets.{' '}
          </p>
        </S.AboutArticle>
        <S.AboutAuthorContainer about={about}>
          {about ? (
            <S.Blockuote>
              <p>{bossDescription}</p>
              <footer>
                <h6>{bossSlogan}</h6>
                <cite>
                  {bossName}{' '}
                  <small>
                    <em>- {bossPosition}</em>
                  </small>
                </cite>
              </footer>
            </S.Blockuote>
          ) : (
            ''
          )}
          <S.AuthorImgContainer>
            <Avatar fluid={profilImage.childImageSharp.fluid} alt={bossName} />
          </S.AuthorImgContainer>
          {home ? (
            <>
              <S.AuthorName className="h5">{bossName}</S.AuthorName>
              <small>{bossPosition}</small>
            </>
          ) : (
            ''
          )}
        </S.AboutAuthorContainer>
      </S.AboutContent>
      {home ? (
        <S.AboutLink
          primary="true"
          to="/about/"
          title="Aller à la page À Propos de Nous"
          fade
          duration={1}
          hex="#ffffff">
          En savoir plus
        </S.AboutLink>
      ) : (
        ''
      )}
    </S.AboutWrapper>
  )
}

export default About
