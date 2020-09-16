import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About/About'
import History from '../components/About/History'

import {setColor} from '../theme/helpers'


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
      <Hero title='A Propos de nous' bcgImage={data.heroBcg.childImageSharp.fluid} />
      <About about />
      <History background={setColor.mainGreyL3}/>
    </Layout>
  )
}

export default aboutPage
