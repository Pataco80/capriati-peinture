import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import Img from 'gatsby-image'
// Import styled-components and helpers
import styled from 'styled-components'
import { SectionContentCenter } from '../styledElements/SectionStyled'

import { setFlex, media, setRadius, setShadow } from '../../theme/helpers'

// GraphQl Queries

const GallerySrl = ({galleryQuery}) => {
  return (
    <SRLWrapper>
      <GallerySection>
        {galleryQuery.map((e) => (
          <GalleryImg key={e.node.id} fluid={e.node.childImageSharp.fluid} />
        ))}
      </GallerySection>
    </SRLWrapper>
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
export default GallerySrl
