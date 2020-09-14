import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery, Link } from 'gatsby'

// Import Components for App
import Title from '../Title'
import ServiceItem from './ServiceItem'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'
import {GatsbyButtonLink} from '../styledElements/Button'

// Import data files
import cardData from '../../data/cardData'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media, setRadius, setColor,setShadow} from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
    servicesIcon:allFile(filter: {relativePath: {regex: "/servicesIcons/"}}) {
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
    featuredImg:allFile(filter: {relativePath: {regex: "/features/"}}) {
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

// Component
  const Services = (props) => {
    // Component Variables
    const {home, background, padding} = props
    const data = useStaticQuery(getData)
    const servicesIconList = data.servicesIcon.edges
    const servicesFeaturedList = data.featuredImg.edges

    const servicefeatured = servicesFeaturedList.map(({ node }) => ({
      featuredImg: node.childImageSharp.fluid,
      originalName: node.childImageSharp.fluid.originalName,
    }))
    const serviceIcon = servicesIconList.map(({ node }) => ({
      icon: node.childImageSharp.fluid,
      originalName: node.childImageSharp.fluid.originalName,
    }))
    
    // Render Component
    return (
      <ServicesWrapper  background={background} padding={padding}>
        {
          home ? <Title tag='h2' title='Nos Services' titleSection/> : ''
        }
        <ServicesContent padding='0'>
          {
            cardData.map(({name, shortName, competences, gallery, altIcon, altFeatured}) => {
              const regExp = new RegExp(shortName, "i");
              return (
                <>
                {
                  home ? 
                  <ServiceItemCard to={`/services/#${shortName}/`} className='cartelien'>
                    <ServiceItem 
                    key={name}
                    shortName={shortName}
                    Icon={
                      serviceIcon.find(({originalName}) => originalName.match(regExp))
                      .icon
                    }
                    name={name}
                    competences={competences}
                    home={home}
                    altIcon={altIcon}
                    />
                  </ServiceItemCard>
                  
                :
                <ServiceItem 
                  key={name}
                  shortName={shortName}
                  Icon={
                    serviceIcon.find(({originalName}) => originalName.match(regExp))
                    .icon
                  }
                  featuredImage={
                    servicefeatured.find(({originalName}) => originalName.match(regExp))
                    .featuredImg
                  }
                  name={name}
                  competences={competences}
                  gallery={gallery}
                  altIcon={altIcon}
                  altFeatured={altFeatured}
                />
                }
                </>
                
                
              )
            })
          }    
        </ServicesContent>
        {
          home ? <ServicesLink primary to='/services/' >En savoir plus</ServicesLink>: '' 
        }
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

const ServiceItemCard = styled(Link)`
  ${setFlex({flDir:'column',x:'flex-start',y:'flex-start'})};
  flex-flow:wrap;
  align-content:flex-start;
  width:100%;
  max-width:400px;
  color:${setColor.mainBlack};
  background-color:${setColor.mainWhite};
  margin-bottom:4rem;
  text-decoration:none;
  ${setRadius(12)};
  ${setShadow('medium')};

  &:hover {
    ${setShadow('dark')};
  }

  &:last-child {
    margin-bottom:1rem;
  }

  ${media.greaterThan('tablet')`
    max-width:45%;
  `}

  ${media.greaterThan('desktop')`
    max-width:32%;
  `}
`

const ServicesLink = styled(GatsbyButtonLink)`
  margin-top:3rem;
`


export default Services
