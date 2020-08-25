import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import { Section , SectionContent } from '../styledElements/SectionStyled'
import {GatsbyLink} from '../styledElements/Button'
import Img from 'gatsby-image'
import Title from '../Title'
import { layout, setFlex, media} from '../../theme/helpers'

export const getImage = graphql`
  {
    profilImage: file(relativePath: {eq: "images/profilImage.png"}) {
      childImageSharp {
        fluid (maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const About = (props) => {
  const { profilImage } = useStaticQuery(getImage)

  const {about,background, padding} = props
  return (
    <AboutWrapper background={background} padding={padding}>
      {
        about ? '' : <Title tag='h2' title='A Propos de Nous' />
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
        about ? '' : <AboutLink primary to='/about/' >En savoir plus</AboutLink>
      }
    </AboutWrapper>
  )
}

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
max-width:200px;
min-height:100px;
`

const AboutLink = styled(GatsbyLink)`
  margin-top:3rem;
`

export default About
