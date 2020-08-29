import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import Img from 'gatsby-image'
import Title from '../Title'
import ServiceGallery from './ServiceGallery'

export const getGalleryImages = graphql`
  {
    servicesGallery:allFile(filter: {relativePath: {regex: "/gallery/services/"}}) {
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


const ServiceItem = ({name, shortName, alt, fixedImage, competences, gallery }) => {
  const data = useStaticQuery(getGalleryImages)
  const serviceItemGallery = data.servicesGallery.edges
  const galleryItem = serviceItemGallery.map(({ node }) => ({
    image: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  const competencesList = competences
  const galleryList = gallery
  return (
    <CardWrapper>
      <CardIcon name={name} shortName={shortName} alt={alt} fixed={fixedImage}/>
      <Title tag='h3' title={name}/>
      <CardDescription>
      {
          competencesList.map((item,i)=>{
            return (
            <p key={i}>{item.text}</p>
            )
          })
        }
        <p>je dois lister les competences</p>
      </CardDescription>
      <div>
        <p>Je liste les images</p>
        {
            galleryList.map(({image, shortName}) => {
              const regExp = new RegExp(shortName, "i");
              return (
                  <ServiceGallery 
                    key={image}
                    shortName={shortName}
                    fluidImage={
                      galleryItem.find(({originalName}) => originalName.match(regExp))
                      .image
                    }
                  />
              )
            })
          }
      </div>

    </CardWrapper>
  )
}

const CardWrapper = styled.article`
  background-color:yellow;
  border: 2px solid red;
  padding:1rem;
`

const CardIcon = styled(Img)`
  border:1px solid violet;
`

const CardDescription = styled.p`
  background-color:silver;
  border: 1px solid green;
  padding:1rem;
`

export default ServiceItem
