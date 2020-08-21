import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

export const getImage = graphql`
  {
    file(relativePath: {eq: "images/pinceaux.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`


const aboutPage = ({data}) => {
  console.log({data})
  return (
    <Layout>
      <Hero title='About Page' bcgImage={data.file.childImageSharp.fluid} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi eaque corrupti ipsa ratione beatae quas tenetur architecto dolores, mollitia saepe accusantium amet recusandae dicta voluptatem explicabo illo aut a?s</p>
    </Layout>
  )
}

export default aboutPage
