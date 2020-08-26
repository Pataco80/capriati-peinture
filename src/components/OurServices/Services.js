import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'
import ServiceCard from './ServiceCard'


import dataCard from '../../data/dataCard.json'

export const getData = graphql`
  {
    allDataCardJson {
      edges {
        node {
          name
          shortName
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }

        }
      }
    }
  }
`

const Services = () => {
  const servicesData = useStaticQuery(getData)
  //const servicesList = allDataCardJson.edges
  //const testEdges = servicesData.edges
  console.log(getData)
  /*const services = servicesList.map(({ node }) => {
    const { name, shortName, icon } = node
    return {
      name,
      shortNamel,
      icon: icon.childImageSharp.fixed
    }
  })*/

  return (
    <Section>
        <SectionContentCenter>
          {
            dataCard.map(({name, shortName, icon}) => (
                <ServiceCard 
                  key={name}
                  shortName={shortName}
                  name={name}
                />
              )
            )
          }
          
        </SectionContentCenter>
      </Section>
  )
}

export default Services
