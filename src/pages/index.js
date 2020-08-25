import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About/About'
import Services from '../components/OurServices/Services'
const indexPage = () => {
  return (
    <Layout>
      <Hero home title='Home Page' />
      <About />
      <Services />
    </Layout>
  )
}

export default indexPage
