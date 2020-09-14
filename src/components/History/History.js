import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Title from '../Title'
import historyData from '../../data/historyData'

import {Section, SectionContentCenter} from '../styledElements/SectionStyled'
import styled from 'styled-components'

import {setFlex, media, layout} from '../../theme/helpers'

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
    <HistoryWrapper  background={background} padding={padding}>
      <Title tag='h2' title='Notre Histore' titleSection/>
      <ServicesContent padding='0'>
        {
          historyData.map(({name, shortName, photo, altPhoto}) => {
            const regExp = new RegExp(shortName, "i");
            return (
              <div>
                <p>{name}</p>
                <p>{shortName}</p>
                <p>{photo}</p>
                <p>{altPhoto}</p>
              </div>
            )
          })
          } 
      </ServicesContent>
    </HistoryWrapper>
  )
}


// Styles from styled-components
const HistoryWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
  padding-bottom:3rem;
`
const ServicesContent = styled(SectionContentCenter)`
  ${setFlex({flDir:'column',y:'center'})};
  flex-wrap:nowrap;

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({flDir:'row', x:'space-around', y:'space-around'})};
    align-items:stretch;
  `}
`

export default History
