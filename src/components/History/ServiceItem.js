import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Img from 'gatsby-image'

// Import Components for App
import Title from '../Title'
import {Section} from '../styledElements/SectionStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import {setFlex, media } from '../../theme/helpers'

// GraphQl Queries
  

// Component
const ServiceItem = (props) => {
  // Component Variables
  const {name, shortName, altIcon, Icon, competences } = props
  
 

  const competencesList = competences

  // Render Component
  return (
    <ServiceWrapper>
      <ServiceHeader>
        <ServiceSmallBanner padding='0'>
          <ServiceIcon name={name} shortName={shortName} alt={altIcon} fluid={Icon}/>
          <Title tag='h3' title={name}/>
        </ServiceSmallBanner>
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
    </ServiceWrapper>
  )
}


// React PropTypes and more...


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



const ServiceIcon = styled(Img)`
  max-width:200px;

  ${media.greaterThan('smTablet')`
    max-width:100px;
  `}
`

const ServiceBody = styled(Section)`
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
