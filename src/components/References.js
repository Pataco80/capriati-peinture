import React from 'react'
// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from './Title'
import { Section } from './styledElements/SectionStyled'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
    referencesData: allReferencesDataJson {
      nodes {
        id
        text
      }
    }
  }
`

// Component
const References = () => {

  // Component Variables
  const data = useStaticQuery(getData)
  const referencesJsonData = data.referencesData.nodes

  // Render Component
  return (
    <ReferencesWrapper>
      <Title tag='h2' title='Nos Références' titleSection/>
      <ul>
        {
          referencesJsonData.map((item,i) => {
            return <ReferenceItem key={i}>{item.text}</ReferenceItem>
          })
        }
      </ul>
    </ReferencesWrapper>
  )
}

const ReferencesWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
  padding-bottom:3rem;
`

const ReferenceItem = styled.li`
  margin-bottom:1rem;
`

export default References
