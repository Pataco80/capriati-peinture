import React from 'react'

// Import Hooks
import useWindowSize from '../../hooks/useWindowSize'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// Import Components for App
import Title from '../Title'
import BcgImage from '../BcgImage'
import { Banner } from '../styledElements/BannerStyled'
import { SectionContentCenter } from '../styledElements/SectionStyled'
import ServiceGallery from './ServiceGallery'
// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, media, breakpoints } from '../../theme/helpers'


// GraphQl Queries
  export const getGalleryImages = graphql`
    {
      servicesGallery:allFile(filter: {relativePath: {regex: "/gallery/services/"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
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
const ServiceItem = (props) => {

  // Component Variables
  const {id, name, shortName, altIcon, altFeatured, Icon, featuredImage, competences, gallery, home } = props

  const data = useStaticQuery(getGalleryImages)
  const serviceItemGallery = data.servicesGallery.edges
  const competencesList = competences
  const windowSize = useWindowSize()
  const toHero = breakpoints.smTablet
  // Component Functions
  const galleryItem = serviceItemGallery.map(({ node }) => ({
    image: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))

  // Render Component
  return (
    <ServiceWrapper key={id} className={home ? 'home' : ''}>
      <ServiceHeader home={home}>
      {
        windowSize < toHero || home ?
        <ServiceSmallBanner padding='0'>
          <IconContainerCard>
            <ServiceIcon name={name} shortName={shortName} alt={altIcon} fluid={Icon}/>
          </IconContainerCard>
          <Title tag='h3' title={name}/>
        </ServiceSmallBanner>
        :
        <ServiceBcgImage name={name} shortName={shortName} fluid={featuredImage} altFeatured={altFeatured}>
          <ServiceBanner>
          <BannerContent padding='1rem'>
          <IconContainer>
            <ServiceIcon name={name} shortName={shortName} alt={altIcon} fluid={Icon}/>
          </IconContainer>
            <h3>{name}</h3>
            </BannerContent>
          </ServiceBanner>
        </ServiceBcgImage>
      }
      </ServiceHeader>
      <ServiceBody padding='0'>
      {
        competencesList.map((item,i)=>{
          return (
            <p key={i}>{item.text}</p>
          )
        })
      }
      </ServiceBody>
      {
        !home &&
        <ServiceGallery gallery={gallery} servicesGalleryImg={galleryItem}/>
      }
    </ServiceWrapper>
  )
}

// Styles from styled-components
const ServiceHeader = styled.header`
  ${setFlex({flDir:'column'})};
  position:relative;
  width:100%;

  ${media.greaterThan('smTablet')`
    align-items:flex-end;
  `}
`

const ServiceBanner = styled.div`
  ${setFlex({flDir:'column'})};
  width:100%;

  ${media.greaterThan('smTablet')`
    ${setFlex({x:'flex-end'})};
    align-self:flex-end;

    h3 {
      margin:0 0 0.5rem 0;
      align-self:flex-end;
    }
  `}
`

const ServiceSmallBanner = styled.div`
  ${setFlex({flDir:'column'})};
  width:100%;
`

const BannerContent = styled(Banner)`
  ${setFlex({x:'flex-end'})};
  background-color:rgba(255,255,255,0.8);
  width:80%;
  max-width:600px;
  border-top-left-radius:100%;
  min-height:150px;
  align-content:flex-end;
`

const ServiceBcgImage = styled(BcgImage)`
  margin-bottom:3rem;
`

const IconContainerCard = styled.div`
  width:200px;
  height: 200px;
`

const IconContainer = styled.div`
  margin-right:1rem;
  width:100px;
  height: 100px;
`

const ServiceIcon = styled(Img)`
  height:inherit;
`

const ServiceBody = styled(SectionContentCenter)`
  flex-grow:2000;
`


const ServiceWrapper = styled.article`
  ${setFlex({flDir:'column'})};
  flex-flow:wrap;
  padding:1rem;
  width:100%;

  &.home {
    padding:2rem;

    ${ServiceBanner} {
      ${setFlex({flDir:'column'})};
    }
  }
`



export default ServiceItem