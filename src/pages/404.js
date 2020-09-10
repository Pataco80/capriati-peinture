import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

import { GatsbyButtonLink } from '../components/styledElements/Button'
import styled from 'styled-components';
import { setFlex, media, setShadow } from '../theme/helpers'

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
      <ErrorHero error title="Page d'erreur 404" bcgImage={data.heroBcg.childImageSharp.fluid} error>
        <Text className='h5'>La page que vous demandez n'éxiste pas, ou l'url que vous avez taper n'est pas valide</Text>
        <CallAction primary to='/'>Retour à la page d'accueil</CallAction>
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
  ${setShadow('light')};

  ${media.greaterThan('tablet')`
    margin:0 0 5rem;
  `}

  ${media.greaterThan('desktop')`
    margin:2rem 0 5rem;
  `}
`

const CallAction = styled(GatsbyButtonLink)`
  text-shadow:none;
  text-align:center;
`

export default errorPage
