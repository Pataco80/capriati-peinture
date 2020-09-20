import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
// Import Components for App
import Title from '../Title'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'

// Import data files
import teamCadreData from '../../data/teamCadreData.json'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media, setRadius, setShadow, setColor } from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
    photo: allFile(filter: {relativeDirectory: {regex: "/team/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
    teamCadre:allTeamCadreDataJson {
      nodes {
        id
        name
        shortName
        photo
        altPhoto
        job
        certifications
        date
      }
    }
  }
`

// Component
  const Team = (props) => {
    // Component Variables
    const {background, padding} = props
    const data = useStaticQuery(getData)
    const photoList = data.photo.edges

    const teamPhoto = photoList.map(({ node }) => ({
      photo: node.childImageSharp.fluid,
      originalName: node.childImageSharp.fluid.originalName,
    }))
console.log(data)

    // Render Component
    return (
      <TeamWrapper  background={background} padding={padding}>
        <Title tag='h2' title='Notre Équipe' titleSection/>
        <TeamContent>
          {
            teamCadreData.map(({name, shortName, altPhoto, job, certifications, date}) => {

              const regExp = new RegExp(shortName, "i");

              return (
                  
                  <ItemWrapper>
                    <ItemProfile>
                      <ItemImage fluid={teamPhoto.find(({originalName}) => originalName.match(regExp))
                      .photo} alt={altPhoto} />
                      <ItemName>{name}</ItemName>
                    </ItemProfile>
                    <ItemDataContent>
                    <h5>{job}</h5>
                    {
                      certifications.map((item,i) => {
                      return <p Key={i}>{item}</p>
                      })
                    }
                    
                    <p>{date}</p>
                    </ItemDataContent>
                  </ItemWrapper>
              )
            })
          }    
        </TeamContent>

      </TeamWrapper>
    )
  }


  // React PropTypes and more...


// Styles from styled-components
const TeamWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
`

const TeamContent = styled(SectionContentCenter)`
  ${setFlex({flDir:'column',y:'center'})};
  flex-wrap:nowrap;

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({flDir:'row', x:'space-around', y:'space-around'})};
    align-items:stretch;
  `}
`


const ItemWrapper = styled.article`
  ${setFlex({flDir:'column',x:'center',y:'flex-start'})};
  flex-flow:wrap;
  align-content:flex-start;
  width:100%;
  max-width:400px;
  color:${setColor.mainBlack};
  background-color:${setColor.mainWhite};
  margin-bottom:3rem;
  text-decoration:none;
  padding:0 1rem;

  &:last-child {
    margin-bottom:0;
  }

  ${media.greaterThan('tablet')`
    max-width:45%;
  `}

  ${media.greaterThan('desktop')`
    max-width:30%;
  `}  
`

const ItemProfile = styled.div`
${setFlex({flDir:'column'})};

`

const ItemImage = styled(Img)`
  ${setRadius({allPc:50})};
  ${setShadow('light')};
  max-width:300px;
`

const ItemName = styled.h3`
  text-align:center;
`

const ItemDataContent = styled.div`
${setFlex({flDir:'column',x:'flex-start',y:'center'})};
text-align:center;
`

const ServiceItemCard = styled.div`
  ${setFlex({flDir:'column',x:'flex-start',y:'flex-start'})};
  flex-flow:wrap;
  align-content:flex-start;
  width:100%;
  max-width:400px;
  color:${setColor.mainBlack};
  background-color:${setColor.mainWhite};
  margin-bottom:4rem;
  text-decoration:none;
  ${setRadius({allPx:12})};
  ${setShadow('medium')};

  &:hover {
    ${setShadow('dark')};
  }


  ${media.greaterThan('tablet')`
    max-width:45%;
  `}

  ${media.greaterThan('desktop')`
    max-width:32%;
  `}
`



export default Team
