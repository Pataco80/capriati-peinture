import React from 'react'
import Layout from '../components/Globals/Layout'
import Title from '../components/Title'
import SEO from '../components/Globals/SEO'

const worksPage = () => {
  return (
    <Layout>
      <SEO title='Nos Travaux' description="Nos travaux éféctués au fil des années" />
      <Title tag='h1' title={'Nos Travaux'}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi eaque corrupti ipsa ratione beatae quas tenetur architecto dolores, mollitia saepe accusantium amet recusandae dicta voluptatem explicabo illo aut a?s</p>
    </Layout>
  )
}

export default worksPage
