import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'

// Import Components for App
import Title from '../Title'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { Section, SectionContentCenter } from '../styledElements/SectionStyled'
import { setFlex } from '../../theme/helpers'

// GraphQl Queries
export const getData = graphql`
  {
    valeurs: allValeursDataJson {
      nodes {
        id
        text
      }
    }
  }
`

// Component
const Valeurs = props => {
  // Component Variables
  const { background } = props
  const data = useStaticQuery(getData)
  const valeursData = data.valeurs.nodes

  // Render Component
  return (
    <ValeursWrapper background={background}>
      <Title tag="h2" title="Nos Valeurs" titleSection />
      <SectionContentCenter>
        <ValeursArticle>
          {valeursData.map((item, i) => {
            return <p key={i}>{item.text}</p>
          })}
        </ValeursArticle>
      </SectionContentCenter>
    </ValeursWrapper>
  )
}

// Styles from styled-components
const ValeursWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
`

const ValeursArticle = styled.article`
  ${setFlex({ flDir: 'column', y: 'flex-start' })};
`

export default Valeurs
