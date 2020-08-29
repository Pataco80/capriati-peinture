import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'
import ServiceItem from './ServiceItem'


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
  const data = useStaticQuery(getData)
  const servicesList = data.servicesData.edges
  const serviceItem = servicesList.map(({ node }) => ({
    icon: node.childImageSharp.fixed,
    originalName: node.childImageSharp.fixed.originalName,
  }))
  

  return (
    <Section>
        <SectionContentCenter>
          {
            cardData.map(({name, shortName, competences, gallery}) => {
              const regExp = new RegExp(shortName, "i");
              return (
                  <ServiceItem 
                    key={name}
                    shortName={shortName}
                    fixedImage={
                      serviceItem.find(({originalName}) => originalName.match(regExp))
                      .icon
                    }
                    name={name}
                    competences={competences}
                    gallery={gallery}
                  />
              )
            })
          }
          
        </SectionContentCenter>
      </Section>
  )
}

export default Services
