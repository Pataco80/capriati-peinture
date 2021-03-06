import React from 'react'

// Import React Hooks

// Import Components for App
import { Layout, SEO, Hero, About, Services } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

const IndexPage = ({ location }) => {
  const currentPage = location.href
  //console.log(`je suis la page href: ${currentPage}`)
  return (
    <Layout
      home
      background={`${setColor.mainGreyL3}`}
      currentPage={currentPage}
    >
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
