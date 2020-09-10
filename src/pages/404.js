import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

import { GatsbyButtonLink } from '../components/styledElements/Button'
import styled from 'styled-components';
import { setFlex, setColor, media, setShadow } from '../theme/helpers'

export const getImage = graphql`
  {
    heroBcg:file(relativePath: {eq: "images/pinceaux.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const errorPage = ({data}) => {
  return (
    <Layout error>
      <ErrorHero error title="Page d'erreur 404" bcgImage={data.heroBcg.childImageSharp.fluid}>
        <Text className='h5'>La page que vous demandez n'éxiste pas, ou l'url que vous avez taper n'est pas valide</Text>
        <CallActionBtn primary to='/'>Retour à la page d'accueil</CallActionBtn>
      </ErrorHero>
    </Layout>
  )
}

const ErrorHero = styled(Hero)`
  ${setFlex({flDir:'column', x:'space-around'})};
  background-color: rgba(0,0,0,0.5);

  
`

const Text = styled.p`
  margin:0 0 3rem;
  text-align:center;
  text-shadow: 3px 3px 3px ${setColor.mainGreyD2};


  ${media.greaterThan('tablet')`
    margin:0 0 3rem !important;
  `}

  ${media.greaterThan('desktop')`
    font-size: 2.197rem;
    line-height: calc(2.197rem + 1vw);
    margin: calc(1.5rem + 1vw) 0;
  `}
`

const CallActionBtn = styled(GatsbyButtonLink)`
  ${setShadow('light')};
  text-align:center;

  &:hover {
    ${setShadow('dark')};
  }
`
export default errorPage
