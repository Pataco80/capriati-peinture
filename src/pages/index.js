import React from 'react'

// Import Components for App
import { Layout, SEO, Hero, About, Services } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

const IndexPage = () => {
  return (
    <Layout home background={`${setColor.mainGreyL3}`}>
      <SEO
        title='Accueil'
        keywords="Page d'Accueil, A propos de nous, Nos Services"
        shareTitle='Bienvenue chez nous.'
      />
      <Hero home title='Home Page' />
      <About home />
      <Services background={`${setColor.mainGreyL3}`} card home />
    </Layout>
  )
}

export default IndexPage
