import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServiceCard from '../components/OurServices/ServiceCard'
import {Section, SectionContentCenter} from '../components/styledElements/SectionStyled'
import styled from 'styled-components'


import cardData from '../data/cardData'

export const query = graphql`
  {
    heroBcg:file(relativePath: {eq: "images/pinceaux.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    allFile(filter: {relativePath: {regex: "/servicesIcons/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`


const servicesPage = ({data}) => {
  const services = data.allFile.edges.map(({ node }) => ({
    image: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }));
  console.log(services)
  return (
    <Layout>
      <Hero title='Nos Services' bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Section>
        <SectionContentCenter>
          {
            cardData.map(({name, shortName, text}) => {
              const regExp = new RegExp(shortName, "i");
              return (
                <Card 
                  key={name}
                  shortName={shortName}
                  fluidImage={
                    services.find(({originalName}) => originalName.match(regExp))
                    .image
                  }
                  name={name}
                  text={text}
                />
              )
            })
          }
          
        </SectionContentCenter>
      </Section>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi eaque corrupti ipsa ratione beatae quas tenetur architecto dolores, mollitia saepe accusantium amet recusandae dicta voluptatem explicabo illo aut a?s</p>
    </Layout>
  )
}

const Card = styled(ServiceCard)`

`

export default servicesPage
