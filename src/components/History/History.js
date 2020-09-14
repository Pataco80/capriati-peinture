import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Title from '../Title'
import historyData from '../../data/historyData'
import HistoryItem from './HistoryItem'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'
import styled from 'styled-components'

import {setFlex, media, layout} from '../../theme/helpers'

export const getHistoryImages = graphql`
  {
    historyPhoto:allFile(filter: {relativeDirectory: {regex: "/history/"}}) {
    edges {
      node {
        childImageSharp {
          fluid (maxWidth:400){
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
  const historyPhotoList = data.historyPhoto.edges

  const historyPhoto = historyPhotoList.map(({ node }) => ({
    photo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))



console.log(historyPhoto)
  return (
    <HistoryWrapper  background={background} padding={padding}>
      <Title tag='h2' title='Notre Histore' titleSection/>
      <HistoryContent>
        {
          historyData.map(({name, shortName, altPhoto, actions}) => {
            const regExp = new RegExp(shortName, "i")
            return (
              <HistoryItem
                Key={name}
                shortName={shortName}
                imgProfile={
                  historyPhoto.find(({originalName}) => originalName.match(regExp))
                  .photo
                }
                altPhoto={altPhoto}
                actions={actions}
              />
            )
          })
        } 
      </HistoryContent>
    </HistoryWrapper>
  )
}


// Styles from styled-components
const HistoryWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
  padding-bottom:3rem;
`
const HistoryContent = styled(SectionContentCenter)`
  ${setFlex({flDir:'column',y:'center'})};
  flex-wrap:nowrap;

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({flDir:'row', x:'space-around', y:'space-around'})};
    align-items:stretch;
  `}
`

export default History
