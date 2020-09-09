import React from 'react'

// Import Components for App
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About/About'
import Services from '../components/OurServices/Services'

// Import styled-components and helpers
import { setColor } from '../theme/helpers'
const indexPage = () => {
  return (
    <Layout home>
      <Hero home title='Home Page' />
      <About home/>
      <Services background={setColor.mainGreyL3} card home />
    </Layout>
  )
}

export default indexPage
