import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
// Import Components for App
import Title from '../Title'
import ServiceItem from './ServiceItem'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'

// Import data files
import historyData from '../../data/historyData'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media} from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
    photo:allFile(filter: {relativePath: {regex: "/servicesIcons/"}}) {
      edges {
        node {
          childImageSharp {
            fluid (maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  }
`

// Component
  const Services = (props) => {
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
      <ServicesWrapper  background={background} padding={padding}>
        <Title tag='h2' title='Notre Histore' />
        <ServicesContent padding='0'>
          {
            historyData.map(({name, shortName, competences, gallery, altIcon, altFeatured}) => {

              const regExp = new RegExp(shortName, "i");
              const competencesList = competences

              return (
                <>
                  <div>
                    <header>
                      <Img fluid={historyPhoto.find(({originalName}) => originalName.match(regExp))
              .photo}/>
                      <p>{name}</p>
                    </header>
                    <div>
                      {
        competencesList.map((item,i)=>{
          return (
            <p key={i}>{item.text}</p>
          )
        })
      }
                    </div>
                  </div>




                {/*<ServiceItem 
                  key={name}
                  shortName={shortName}
                  Icon={
                    historyPhoto.find(({originalName}) => originalName.match(regExp))
                    .photo
                  }
                  name={name}
                  competences={competences}
                  gallery={gallery}
                  altIcon={altIcon}
                  altFeatured={altFeatured}
                />*/}
                </>
                
                
              )
            })
          }    
        </ServicesContent>

      </ServicesWrapper>
    )
  }


  // React PropTypes and more...


// Styles from styled-components
const ServicesWrapper = styled(Section)`
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


export default Services
