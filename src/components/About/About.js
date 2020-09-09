import React from 'react'

// Import components from Gatsby and plugins Gatsby
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

// Import Components for App
import { Section , SectionContent } from '../styledElements/SectionStyled'
import {GatsbyButtonLink} from '../styledElements/Button'
import Title from '../Title'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media} from '../../theme/helpers'

// GraphQl Queries
export const getImage = graphql`
  {
    profilImage: file(relativePath: {eq: "images/profilImage.png"}) {
      childImageSharp {
        fluid (maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
        home ? <Title tag='h2' title='A Propos de Nous' /> : ''
      }
      <AboutContent>
        <AboutArticle>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor consequatur a tempora nihil asperiores quibusdam cupiditate dicta ut atque nemo rem ipsa vero et dolorem eveniet, esse expedita facere voluptates?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor consequatur a tempora nihil asperiores quibusdam cupiditate dicta ut atque nemo rem ipsa vero et dolorem eveniet, esse expedita facere voluptates?</p>
        </AboutArticle>
        <AboutImgContainer>
          <Img fluid={profilImage.childImageSharp.fluid} alt='Vincent Capriati' />
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
    margin-right:3rem;
  `}

`

const AboutImgContainer = styled.div`
  width:100%;
  max-width:300px;
  min-height:100px;
`

const AboutLink = styled(GatsbyButtonLink)`
  margin-top:3rem;
`

export default About
