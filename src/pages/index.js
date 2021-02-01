import React from 'react'

// Import Components for App
import { Layout, SEO, Hero, About, Services } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

const indexPage = () => {
  return (
    <Layout home background={`var(--mediumBackground)`}>
      <SEO title="Accueil" keywords="Page d'Accueil, A propos de nous, Nos Services" />
      <Hero home title="Home Page" />
      <About home />
      <Services background={`var(--mediumBackground)`} card home />
    </Layout>
  )
}

export default indexPage
