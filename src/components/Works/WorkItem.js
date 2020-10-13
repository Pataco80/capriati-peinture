import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

import Title from '../Title'
//import WorkGallery from './WorkGallery'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

export const getGalleryImages = graphql`
  {
    images: allFile(
      filter: { relativePath: {regex: "/works/"} }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
              originalName
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


const Workitem = ({ workName, infos, galleryContent }) => {

  // Component Variables
  const data = useStaticQuery(getGalleryImages)
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // Use original name as caption.
    // The `originalName` is queried inside the `thumb` field,
    // but the `Gallery` component expects `caption` at the top level.
    caption: node.childImageSharp.thumb.originalName,
  }))

console.log(data)
  return (
    <div>
      <Title tag='h3' title={workName} />
      {
        infos.map((item,i) => {
        return <p Key={i}>{item.text}</p>
        })
      }
      <Gallery images={images}/>
    </div>
  )
}

export default Workitem
