import React from 'react'
// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

const Workgallery = ({galleryContent}) => {
  return (
    <div>
      {
        galleryContent.map((item,i) => {
          return(
          <div Key={i}>
          <p>{item.name}</p>
          <p>{item.shortName}</p>
          <p>{item.caption}</p>
          </div>)
        })
      }
    </div>
  )
}

export default Workgallery
