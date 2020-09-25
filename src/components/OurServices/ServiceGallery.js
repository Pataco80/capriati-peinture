import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import styled-components and helpers
import styled from 'styled-components'
import { setRadius, setShadow, media } from '../../theme/helpers'

// Component
const ServiceGallery = ({shortName, fluidImage, altImg}) => {
  console.log(altImg)
  // Component Variables

  // Render Component
  return (
    <ImageWrapper>
      <GalleryImg fluid={fluidImage} shortName={shortName} alt={altImg} title={altImg} />
    </ImageWrapper>
  )
}

// Styles from styled-components
const ImageWrapper = styled.div`
  margin-bottom:2rem;
  width:100%;

  ${media.greaterThan('smTablet')`
    width:30%;
  `}
`

const GalleryImg = styled(Img)`
  width:100%;
  ${setRadius({allPx:12})};
  box-shadow:${setShadow('medium')};
`

export default ServiceGallery