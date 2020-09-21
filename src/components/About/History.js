import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
// Import Components for App
import Title from '../Title'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'

// Import data files
import historyData from '../../data/historyData'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media, setRadius, setShadow } from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
    photo:allFile(filter: {relativePath: {regex: "/familly/"}}) {
      edges {
        node {
          childImageSharp {
            fluid (maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
    historyData:allHistoryDataJson {
    edges {
      node {
        id
        name
        shortName
        photo
        altPhoto
        actions {
          id
          date
          text
        }
      }
    }
  }
  }
`

// Component
  const History = (props) => {
    // Component Variables
    const {background, padding} = props
    const data = useStaticQuery(getData)
    const photoList = data.photo.edges

    const historyPhoto = photoList.map(({ node }) => ({
      photo: node.childImageSharp.fluid,
      originalName: node.childImageSharp.fluid.originalName,
    }))


    // Render Component
    return (
      <HistoryWrapper  background={background} padding={padding}>
        <HistoryContent>
          <Title tag='h2' title='Notre Histore' titleSection/>
          {
            historyData.map(({id, name, shortName, altPhoto, actions}) => {

              const regExp = new RegExp(shortName, "i");
              const actionsList = actions

              return (
                  <ItemWrapper key={id}>
                    <ItemProfile>
                      <ItemImage fluid={historyPhoto.find(({originalName}) => originalName.match(regExp))
                      .photo} alt={altPhoto} />
                      <ItemName>{name}</ItemName>
                    </ItemProfile>
                    <ItemDataContent>
                      {
                        actionsList.map((item) => {
                          const {id,date,text} = item
                          return (
                            <ItemData Key={id}>
                              <Date>{date}</Date>
                              <Action>{text}</Action>
                            </ItemData>
                          )
                        })
                      }
                    </ItemDataContent>
                  </ItemWrapper>
              )
            })
          }    
        </HistoryContent>

      </HistoryWrapper>
    )
  }


  // React PropTypes and more...


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

const ItemProfile = styled.div`
  width:100%;
  max-width:18.75rem;

  ${media.greaterThan('tablet')`
    width:30%;
    margin-right:3rem;
  `}
`

const ItemImage = styled(Img)`
  ${setRadius({allPc:50})};
  ${setShadow('light')};
`

const ItemName = styled.h4`
  text-align:center;
`

const ItemDataContent = styled.table`

  ${media.greaterThan('tablet')`
    width:70%;
  `}
`
const ItemData = styled.tr`
  width:100%;
  margin-bottom:1.5rem;

  ${media.greaterThan('tablet')`
    margin-bottom:1rem;
  `}  
`

const Date = styled.td`
width:100%;
${media.greaterThan('tablet')`
width:auto;
padding-right:1rem;
  `} 



`

const Action = styled.td`
width:100%;
  padding-bottom:1rem;
`

const ItemWrapper = styled.div`
  ${setFlex({flDir:'column'})};
  margin-bottom:2rem;

  &:last-child {
    margin-bottom:0;
  }

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row'})};
    flex-wrap:nowrap;
    margin-bottom:4rem;

    &:nth-child(odd) {
      flex-direction:row-reverse;
      ${ItemProfile} {
        margin:0 0 0 3rem;
      }
    }
  `}
`

export default History
