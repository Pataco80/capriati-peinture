import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../Title'
import Avatar from '../Avatar'

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
    authorData: site {
      siteMetadata {
        author
        authorPosition
        authorDescription
        authorSlogan
      }
    }
  }
`

// Component
const About = props => {
  // Component Variables
  const { home, about, background } = props
  const { profilImage, authorData } = useStaticQuery(getData)
  const { author, authorPosition, authorDescription, authorSlogan } = authorData.siteMetadata

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
              <p>{authorDescription}</p>
              <footer>
                <h6>{authorSlogan}</h6>
                <cite>
                  {author}{' '}
                  <small>
                    <em>- {authorPosition}</em>
                  </small>
                </cite>
              </footer>
            </S.Blockuote>
          ) : (
            ''
          )}
          <S.AuthorImgContainer>
            <Avatar fluid={profilImage.childImageSharp.fluid} alt={author} />
          </S.AuthorImgContainer>
          {home ? (
            <>
              <S.AuthorName>{author}</S.AuthorName>
              <small>{authorPosition}</small>
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
