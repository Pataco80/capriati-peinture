import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import historyData from '../../data/cardData'

export const getHistoryImages = graphql`
  {
    photo:allFile(filter: {relativeDirectory: {regex: "/history/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
}
`
const History = (props) => {
  // Component Variables
  const {background, padding} = props
  const data = useStaticQuery(getHistoryImages)
  const historyPhotoList = data.photo.edges

  const historyPhoto = historyPhotoList.map(({ node }) => ({
    photo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))



console.log(historyPhoto)
  return (
    <div>
      i Am History
    </div>
  )
}

export default History
