import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Profile from '../../Profile/Profile'

// Import data files
import historyProfileData from '../../../data/historyProfileData.json'

// Import styled-components and helpers
import * as S from './HistoryProfileStyled'

// GraphQl Queries
export const getData = graphql`
  {
    photo:allFile(filter: {relativePath: {regex: "/familly/"}}) {
      edges {
        node {
          childImageSharp {
            fluid (maxWidth: 300) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`

// Component
const Historyprofile = () => {
  const data = useStaticQuery(getData)
  const photoList = data.photo.edges

  const historyPhoto = photoList.map(({ node }) => ({
    photo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  return (
    <S.HistoryProfileWrapper>
      {
        historyProfileData.map(({id, name, shortName, altPhoto}) => {

          const regExp = new RegExp(shortName, "i");
          const photoPath = historyPhoto.find(({originalName}) => originalName.match(regExp))
          .photo

          return (
            <S.ProfileItem>
              <Profile id={id} name={name} fluid={photoPath} altPhoto={altPhoto} />
            </S.ProfileItem>
          )
        })
      }    
    </S.HistoryProfileWrapper>
  )
}


export default Historyprofile
