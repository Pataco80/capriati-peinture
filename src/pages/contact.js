import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Contactform from '../components/ContactForm'
const contactPage = () => {
  return (
    <Layout>
      <Title tag='h1' title={'Contactez-Nous'}/>
      <Contactform/>
    </Layout>
  )
}

export default contactPage
