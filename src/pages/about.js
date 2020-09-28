import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Globals/Layout'
import Hero from '../components/Hero'
import About from '../components/About/About'
import History from '../components/History/History'
import Team from '../components/Team/Team'
import SEO from '../components/Globals/SEO'
import {setColor} from '../theme/helpers'
import Parteners from '../components/Parteners'


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


const aboutPage = ({data}) => {
  return (
    <Layout>
      <SEO title='A Propos de Nous' description="A Propos de l'entrerise Capriati S.A., son histoire, son équipe et ces partenaires" keywords="A Propos, entreprise peinture, entreprise familiale, entretien, rénovation peinture, historique"/>
      <Hero title='A Propos de nous' bcgImage={data.heroBcg.childImageSharp.fluid} />
      <About about />
      <History background={setColor.mainGreyL3}/>
      <Team />
      <Parteners />
    </Layout>
  )
}

export default aboutPage
