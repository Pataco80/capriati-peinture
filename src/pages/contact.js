import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Layout from '../components/Globals/Layout'
import Title from '../components/Title'
import Hero from '../components/Hero'
import Contactform from '../components/ContactForm/ContactForm'
import { SectionCenter, SectionContent } from '../components/styledElements/SectionStyled'
import { Fax, PhoneAlt, Envelope } from '@styled-icons/fa-solid'
import SEO from '../components/Globals/SEO'

// Import styled-components and helpers
import styled from 'styled-components'
import { setFlex, media, setColor } from '../theme/helpers'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/contact-page-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// Component
const contactPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Nous Contacter"
        description="Contactez l'entreprise Capriati S.A."
        keywords="Nous contacter, formulaire de contact, Nos Coordonées, téléphone, e-mail"
        image="contact"
      />
      <Hero title="Nous Contacter" bcgImage={data.heroBcg.childImageSharp.fluid} />
      <Contactform />
      <ContactSection>
        <Title tag="h3" title="Nos Coordonées" titleSection />
        <ContactSectionContent>
          <ContactInfo>
            <Title tag="h5" title="Adresse" noShadow />
            <Title tag="h6" title="Capriati S.A." noShadow />
            <p>
              Z.A. La Pièce 20 <br />
              1180 Rolle
            </p>
          </ContactInfo>
          <ContactInfo>
            <Title tag="h5" title="Contact" noShadow />
            <p>
              <strong>
                <PhoneAlt className="contactInfo-icon" /> :{' '}
              </strong>
              <a href="tel:0218254017">021 825 40 17</a>
            </p>
            <p>
              <strong>
                <Fax className="contactInfo-icon" /> :{' '}
              </strong>
              021 825 50 11
            </p>
            <p>
              <strong>
                <Envelope className="contactInfo-icon" /> :{' '}
              </strong>
              <a href="mailto:capriati@bluewin.ch">capriati@bluewin.ch</a>
            </p>
          </ContactInfo>
        </ContactSectionContent>
      </ContactSection>
    </Layout>
  )
}

// Styles from styled-components
const ContactSection = styled(SectionCenter)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('smTablet')`
    ${setFlex()};
  `}
`

const ContactSectionContent = styled(SectionContent)`
  ${media.greaterThan('smTablet')`
    ${setFlex({ y: 'flex-start' })};
  `}
`

const ContactInfo = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  ${media.greaterThan('smTablet')`
    width: 50%;
  `}

  a {
    color: ${setColor.mainBlack};
  }

  .contactInfo-icon {
    display: inline-block;
    color: ${setColor.primaryColor};
    width: 1.5rem;
  }
`

export default contactPage
