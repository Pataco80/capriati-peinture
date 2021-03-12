import React from 'react'
// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title } from '@components'

// Import StyledElements for basic styles
import { SectionContentCenter } from '@styledElements/SectionStyled'

// Import styles from styled-components file
import * as S from './ReferencesStyled'

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
const References = ({ background }) => {
  // Component Variables
  const data = useStaticQuery(getData)
  const referencesJsonData = data.referencesData.nodes

  // Render Component
  return (
    <S.ReferencesWrapper background={background}>
      <Title tag='h2' title='Nos Références' titleSection />
      <SectionContentCenter>
        <ul>
          {referencesJsonData.map((item, i) => {
            return <S.ReferenceItem key={i}>{item.text}</S.ReferenceItem>
          })}
        </ul>
      </SectionContentCenter>
    </S.ReferencesWrapper>
  )
}

export default References
