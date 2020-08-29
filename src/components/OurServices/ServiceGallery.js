import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
const ServiceGallery = ({shortName, fluidImage}) => {
  return (
    <GalleryWrapper>
      <Img fluid={fluidImage} shortName={shortName} />
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div``

export default ServiceGallery
