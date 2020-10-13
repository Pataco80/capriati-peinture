import React from 'react'
import { graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'


export const query = graphql`
  {
  images: allFile(filter: {relativePath: {regex: "/workName1/"}}) {
    edges {
      node {
        childImageSharp {
          thumb: fluid(maxWidth: 270, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
          full: fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`


const galleriePage = ({data}) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // Use original name as caption.
    // The `originalName` is queried inside the `thumb` field,
    // but the `Gallery` component expects `caption` at the top level.
    //caption: node.childImageSharp.thumb.originalName,
  }))

  // Override some of Lightbox options to localise labels in French
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }
  return (<Gallery images={images} lightboxOptions={lightboxOptions} />)
}

export default galleriePage
