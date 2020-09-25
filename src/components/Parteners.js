import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Title from './Title'
import PartenersItem from './PartenersItem'
import styled from 'styled-components'
import {Section, SectionContentCenter} from './styledElements/SectionStyled'
import { media, setFlex } from '../theme/helpers'

const getData = graphql`
  {
    logos:allFile(filter: {relativePath: {regex: "/parteners/"}}) {
      edges {
        node {
          childImageSharp {
            fluid (maxWidth:400) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
    partenersData: allPartnersDataJson {
        nodes {
          id
          name
          shortName
          logo
          altLogo
          url
          urlTitle
        }
      }
  }
`
const Parteners = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  const logoList = data.logos.edges
  const parteners = data.partenersData.nodes

  const partenersLogo = logoList.map(({ node }) => ({
    logo: node.childImageSharp.fluid,
    originalName: node.childImageSharp.fluid.originalName,
  }))
  return (
    <PartenersWrapper>
      <Title tag='h2' title='Nos Partenaires' titleSection />
      <PartenersLogosContainer>
        {
          parteners.map((item,i) => {
            const { shortName, altLogo, url, urlTitle } = item
            const regExp = new RegExp(shortName, "i");
            const logoPath = partenersLogo.find(({originalName}) => originalName.match(regExp))
            .logo
            return <PartenersItem 
            Key={i} 
            fluid={logoPath} 
            altLogo={altLogo} 
            url={url} 
            urlTitle={urlTitle}
            />
          })
        }
        
      </PartenersLogosContainer>
    </PartenersWrapper>
  )
}

const PartenersWrapper = styled(Section)``

const PartenersLogosContainer = styled(SectionContentCenter)`
  ${setFlex({flDir:'column'})};

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row', x:'space-around'})};
  `}
`

export default Parteners
