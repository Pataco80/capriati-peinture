import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About/About'
const indexPage = () => {
  return (
    <Layout>
      <Hero home title='Home Page' />
      <About />
    </Layout>
  )
}

export default indexPage
