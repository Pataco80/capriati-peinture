import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../Title'
//import WorkItem from './WorkItem'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'
import WorksGallerySrl from './WorksGallerySrl'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media } from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
query getGallery {
  work1:allFile(filter: {relativeDirectory: {regex: "/work1/"}}) {
    edges {
      node {
        ...getImage
      }
    }
  }
  anciensTravaux:allFile(filter: {relativeDirectory: {regex: "/anciens-travaux/"}}) {
    edges {
      node {
        ...getImage
      }
    }
  }
}
fragment getImage on File {
  childImageSharp{
    fluid{
      ...GatsbyImageSharpFluid
    }
  }
}
`
const Works = () => {
const data = useStaticQuery(getData)
  // Component Variables
  const work1 = data.work1.edges
  const anciensTravaux = data.anciensTravaux.edges

  return (
    <WorksWrapper>
      <Title tag='h2' title='Nos Réalisations' titleSection/>
      <WorksContent>
        <WorkItem>
            <Title tag='h3' title='Centre ProJeunesse de Rolle' titleSection/>
            <Text>Rénovation intérieure et extérieure du centre pour jeunes et fresques murales.</Text>
          <SectionContentCenter  padding='3rem 0 5rem'>
            <WorksGallerySrl galleryQuery={work1} />
          </SectionContentCenter>
        </WorkItem>
        <WorkItem>
            <Title tag='h3' title='Nos Anciens Travaux' titleSection/>
            <Text>Voici certains des divers travaux et chantiers que nous avions effectués entre 19xx et 20xx.</Text>
          <SectionContentCenter  padding='3rem 0 5rem'>
            <WorksGallerySrl galleryQuery={anciensTravaux} />
          </SectionContentCenter>
        </WorkItem>
      </WorksContent>
    </WorksWrapper>
  )
}

// Styles from styled-components
const WorksWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
  padding-bottom:3rem;
`

const WorksContent = styled(SectionContentCenter)`
  ${setFlex({flDir:'column',y:'center'})};
  flex-wrap:nowrap;

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({flDir:'row', x:'space-around', y:'space-around'})};
    align-items:stretch;
  `}
`


const WorkItem = styled.article`
  ${setFlex({flDir:'column'})};
  flex-flow:wrap;
  padding:1rem;
  width:100%;
`

const Text = styled.p`
  flex:auto;
`

export default Works
