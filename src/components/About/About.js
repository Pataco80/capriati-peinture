import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Section , SectionContent } from '../styledElements/SectionStyled'
import {GatsbyButtonLink} from '../styledElements/Button'
import Title from '../Title'
import Avatar from '../Avatar'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media } from '../../theme/helpers'

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
  const {home,background, padding} = props
  const { profilImage } = useStaticQuery(getImage)


  // Render Component
  return (
    <AboutWrapper background={background} padding={padding}>
      {
        home ? <Title tag='h2' title='A Propos de Nous' titleSection /> : ''
      }
      <AboutContent>
        <AboutArticle>
          <p>Bienvenue chez Capriati peinture, entreprise familiale spécialisée dans les travaux d’entretien et de rénovation depuis plus de 40 ans.</p>
          <p>Bénéficiant d’une solide expérience afin de satisfaire à vos exigences pour une prestation de qualité, notre équipe de professionnels qualifiés, motivés et passionnés se tient à votre disposition pour vous accompagner à la réalisation de vos projets. </p>
        </AboutArticle>
        <AboutImgContainer>
          <Avatar fluid={profilImage.childImageSharp.fluid} alt='Vincent Capriati' />
        </AboutImgContainer>
      </AboutContent>
      {
        home ? <AboutLink primary to='/about/' >En savoir plus</AboutLink> : ''
      }
    </AboutWrapper>
  )
}

// React PropTypes and more...


// Styles from styled-components
const AboutWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
  padding-bottom:3rem;
`

const AboutContent = styled(SectionContent)`
  ${layout()};
  ${setFlex({flDir:'column',wrap:'nowrap'})};

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row'})};
  `}
`

const AboutArticle = styled.article`
  ${setFlex()};

  ${media.greaterThan('tablet')`
    width:60%;
  `}

`

const AboutImgContainer = styled.div`
width:100%;
  max-width:250px;
  padding:2rem 0 0 0;

  ${media.greaterThan('tablet')`
    padding:0 0 0 1.5rem;
  `}
`

const AboutLink = styled(GatsbyButtonLink)`
  margin:3rem 0 1rem;
`

export default About
