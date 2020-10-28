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
          <ImgWrapper key={e.node.id}>
            <a href={e.node.childImageSharp.fluid.src} data-attribute="SRL">
            <Image fluid={e.node.childImageSharp.fluid} />
            </a>
          </ImgWrapper>
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

const ImgWrapper = styled.div`
  width:100%;
  ${setRadius({allPx:12})};
  box-shadow:${setShadow('medium')};
  margin-bottom:1rem;

  ${media.greaterThan('tablet')`
    width: 30%;
  `}
`

const Image = styled(Img)`
  ${setRadius({allPx:12})}; 
`

export default GallerySrl
