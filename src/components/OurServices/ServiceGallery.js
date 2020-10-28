import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'
import { SectionContentCenter } from '../styledElements/SectionStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, media, setRadius, setShadow } from '../../theme/helpers'

// Component
const ServiceGallery = ({gallery, servicesGalleryImg}) => {

  // Component Variables
  const galleryList = gallery
  const galleryItem = servicesGalleryImg
  // Render Component
  return (
    <GallerySection padding='3rem 0 5rem'>
      {
        galleryList.map(({id, shortName, altImg}) => {
          const regExp = new RegExp(shortName, "i");
          const imagePath = galleryItem.find(({originalName}) => originalName.match(regExp))
          .image
          return (
            <GalleryImg key={id} fluid={imagePath} alt={altImg}/>
          )
        })
      }
    </GallerySection>
  )
}

// Styles from styled-components
const GallerySection = styled(SectionContentCenter)`
  ${setFlex({flDir:'column'})};
  margin-bottom:1rem;

  ${media.greaterThan('smTablet')`
    ${setFlex({flDir:'row',x:'space-around'})};
  `}
`

const GalleryImg = styled(Img)`
  width:100%;
  ${setRadius({allPx:12})};
  box-shadow:${setShadow('medium')};
  margin-bottom:1rem;

  ${media.greaterThan('tablet')`
    width: 30%;
  `}
`

export default ServiceGallery