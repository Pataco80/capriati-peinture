import React from 'react'

// Import styles from styled-components file
import * as S from './ServiceGalleryStyled'

// Component
const ServiceGallery = ({ gallery, servicesGalleryImg }) => {
  // Component Variables
  const galleryList = gallery
  const galleryItem = servicesGalleryImg

  // Render Component
  return (
    <S.GallerySection padding="3rem 0 5rem">
      {galleryList.map(({ id, shortName, altImg }) => {
        // Images Variables and Functions
        const regExp = new RegExp(shortName, 'i')
        const imagePath = galleryItem.find(({ originalName }) => originalName.match(regExp)).image

        // Return Gallery Images
        return (
          <S.ImgWrapper key={id}>
            <S.Image fluid={imagePath} alt={altImg} />
          </S.ImgWrapper>
        )
      })}
    </S.GallerySection>
  )
}

export default ServiceGallery
