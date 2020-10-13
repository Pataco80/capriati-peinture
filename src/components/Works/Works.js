import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../Title'
import WorkItem from './WorkItem'
import {Section, SectionContentCenter} from '../styledElements/SectionStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import { layout, setFlex, media } from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
  worksData:allWorkGalleryJson {
    nodes {
      id
      workName
      infos {
        id
        text
      }
      galleryContent {
        name
        shortName
        thumbnail
        fullImg
        caption
      }
    }
  }
}
`
const Works = () => {

  // Component Variables
  const data = useStaticQuery(getData)
  const worksJsonData = data.worksData.nodes

  return (
    <WorksWrapper>
      <Title tag='h2' title='Nos Réalisations' titleSection/>
      <WorksContent>
        {
          worksJsonData.map(({id, workName, infos, galleryContent }) => {
            return <WorkItem
            key={id}
            workName={workName}
            infos={infos}
            galleryContent={galleryContent}
          />
          })
        }
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

export default Works
