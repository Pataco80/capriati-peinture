import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title } from '@components'
import Gallery from '@browniebroke/gatsby-image-gallery'

// Import styles from styled-components file and gallery CSS file
import * as S from './WorksStyled'

// Import styles from galery lightbox
import '@browniebroke/gatsby-image-gallery/dist/style.css'

// Component
const Works = ({ background }) => {
  // Component Variables
  const data = useStaticQuery(getData)

  // Component Functions
  const anciensTravaux = data.anciensTravaux.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // caption: node.name
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

  // Render Component
  return (
    <S.WorksWrapper background={background}>
      <Title tag='h2' title='Nos Réalisations' />
      <S.WorksContent>
        <S.WorkItem>
          <S.GallerySection padding='3rem 0 5rem'>
            <Gallery
              imgClass='galleryImg'
              images={anciensTravaux}
              lightboxOptions={lightboxOptions}
            />
          </S.GallerySection>
        </S.WorkItem>
      </S.WorksContent>
    </S.WorksWrapper>
  )
}

// GraphQl Queries
export const getData = graphql`
  query getGallery {
    anciensTravaux: allFile(
      filter: { relativeDirectory: { regex: "/anciens-travaux/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          ...getImage
        }
      }
    }
  }

  fragment getImage on File {
    name
    childImageSharp {
      thumb: fluid(maxWidth: 270, maxHeight: 270) {
        ...GatsbyImageSharpFluid_withWebp
        originalName
      }
      full: fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export default Works
