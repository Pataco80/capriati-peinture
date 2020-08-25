import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'
import ServiceCard from './ServiceCard'


import cardData from '../../data/cardData'

export const getData = graphql`
  {
    servicesData:allFile(filter: {relativePath: {regex: "/servicesIcons/"}}) {
      edges {
        node {
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`

const Services = () => {
  const servicesData = useStaticQuery(getData)
  const servicesList = servicesData.servicesData.edges
  //const testEdges = servicesData.edges 
  const services = servicesList.map(({ node }) => ({
    icon: node.childImageSharp.fixed,
    originalName: node.childImageSharp.fixed.originalName,
  }));
  

  return (
    <Section>
        <SectionContentCenter>
          {
            cardData.map(({name, shortName, text}) => {
              const regExp = new RegExp(shortName, "i");
              return (
                <ServiceCard 
                  key={name}
                  shortName={shortName}
                  fixedImage={
                    services.find(({originalName}) => originalName.match(regExp))
                    .icon
                  }
                  name={name}
                  text={text}
                />
              )
            })
          }
          
        </SectionContentCenter>
      </Section>
  )
}

export default Services
