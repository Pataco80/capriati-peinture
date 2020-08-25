import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import {Section, SectionContentCenter} from '../components/styledElements/SectionStyled'
import styled from 'styled-components'


import cardData from '../data/cardData'

export const query = graphql`
  {
    allFile(filter: {relativePath: {regex: "/servicesIcons/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              originalName
            }
          }
        }
      }
    }
    heroBcg:file(relativePath: {eq: "images/pinceaux.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

  }
`


const servicesPage = ({data}) => {
  return (
    <Layout>
      <Hero title='Nos Services' bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Section>
        <SectionContentCenter>
          {
            cardData.map(({name,icon,text}) => {
              return(
                <ServiceCard>
                  <p>je suis un article</p>
                </ServiceCard>
              )
            })
          }
        </SectionContentCenter>
      </Section>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi eaque corrupti ipsa ratione beatae quas tenetur architecto dolores, mollitia saepe accusantium amet recusandae dicta voluptatem explicabo illo aut a?s</p>
    </Layout>
  )
}

export const ServiceCard = styled.article`

`

export default servicesPage
