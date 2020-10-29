import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from './Title'
import {Section, SectionContentCenter} from './styledElements/SectionStyled'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media, setRadius, setShadow } from '../theme/helpers'

const Works = () => {
  // Component Variables
  const data = useStaticQuery(getData)

  // Component Functions
  const work1 = data.work1.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // Use original name as caption.
    // The `originalName` is queried inside the `thumb` field,
    // but the `Gallery` component expects `caption` at the top level.
    // caption: node.childImageSharp.thumb.originalName,
  }))

  const anciensTravaux = data.anciensTravaux.edges.map(({ node }) => ({
    ...node.childImageSharp,
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
    <WorksWrapper>
      <Title tag='h2' title='Nos Réalisations' titleSection/>
      <WorksContent>
        <WorkItem>
          <Title tag='h3' title='Centre ProJeunesse de Rolle' titleSection/>
          <Text>Rénovation intérieure et extérieure du centre pour jeunes et fresques murales.</Text>
          <GallerySection  padding='3rem 0 5rem'>
            <Gallery imgClass="galleryImg" images={work1} lightboxOptions={lightboxOptions} />
          </GallerySection>
        </WorkItem>
        <WorkItem>
          <Title tag='h3' title='Nos Anciens Travaux' titleSection/>
          <Text>Voici certains des divers travaux et chantiers que nous avions effectués entre 19xx et 20xx.</Text>
          <GallerySection  padding='3rem 0 5rem'>
            <Gallery imgClass="galleryImg" images={anciensTravaux} lightboxOptions={lightboxOptions} />
          </GallerySection>
        </WorkItem>
      </WorksContent>
    </WorksWrapper>
  )
}

// GraphQl Queries
export const getData = graphql`
  query getGallery {
    work1:allFile(filter: {relativeDirectory: {regex: "/work1/"}}
    sort: { fields: name }
    ) {
      edges {
        node {
          ...getImage
        }
      }
    }
    anciensTravaux:allFile(filter: {relativeDirectory: {regex: "/anciens-travaux/"}}
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
    childImageSharp {
      thumb: fluid(maxWidth: 270, maxHeight: 270) {
        ...GatsbyImageSharpFluid
        originalName
      }
      full: fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

// Styles from styled-components
const WorksWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
  padding-bottom:3rem;
`

const WorksContent = styled(SectionContentCenter)`
  ${setFlex({flDir:'column',y:'center'})};
  flex-wrap:nowrap;

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({flDir:'row', x:'space-around', y:'space-around'})};
    align-items:stretch;
  `}
`

const WorkItem = styled.article`
  ${setFlex({flDir:'column'})};
  flex-flow:wrap;
  padding:1rem;
  width:100%;
`

const Text = styled.p`
  flex:auto;
`

const GallerySection = styled(SectionContentCenter)`
  [class*="Row"] {
    ${setFlex({flDir:'column'})};
    margin-bottom:1rem;

    ${media.greaterThan('tablet')`
      ${setFlex({flDir:'row',x:'space-around'})};
    `}
  }

  [class*="Col"] {
    padding:0;
    margin:0;
    width:100%;
    max-width:100%;
    flex-basis:100%;
    height:auto;
    margin-bottom:1rem;

    ${media.greaterThan('tablet')`
      max-width:30%;
      max-height:230px;
    `}
  }

  .galleryImg {
    padding:0;
    margin:0;
    width:100%;
    max-height:350px;
    ${setRadius({allPx:12})};
    box-shadow:${setShadow('medium')};

    ${media.greaterThan('tablet')`
      max-height:230px;
    `}
  }
`

export default Works
