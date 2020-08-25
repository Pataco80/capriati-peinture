import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Section, SectionContentCenter } from '../styledElements/SectionStyled'
import Title from '../Title'
import { setFlex, media} from '../../theme/helpers'
//import valeursData from '../../data/valeursData.json'

/*
export const getValeurs = graphql`
{
  valeurs:allValeursDataJson {
    edges {
      node {
        id
        name
        text {
          id
          text
        }
      }
    }
  }
}
`
*/

const Valeurs = () => {
  //const valeurs = useStaticQuery(getValeurs)
  //const {name} = valeurs.edges.node
  //console.log({test})
  return (
    <ValeursWrapper>
      <Title tag='h2' title='Nos Valeurs' />
      <SectionContentCenter>

      </SectionContentCenter>
        <ValeursArticle>
          <Title tag='h3' title='nom de valeur' />
          <p>paragraphes à boucler</p>
        </ValeursArticle>
    </ValeursWrapper>
  )
}

const ValeursWrapper = styled(Section)`
${setFlex({flDir:'column'})};
`

const ValeursArticle = styled.article`
  ${setFlex({flDir:'column'})};

  ${media.greaterThan('tablet')`
    width:60%;
    margin-right:3rem;
  `}

`
export default Valeurs
