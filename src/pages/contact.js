import React from 'react'
import mapsSelector from '../utils/getGoogleMap'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import { Layout, SEO, Hero, Title, ContactForm } from '@components'
import { Fax, PhoneAlt, Envelope } from '@styled-icons/fa-solid'
import { Map } from '@styled-icons/boxicons-regular'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { SectionContent, Section } from '@styledElements/SectionStyled'
import { Button } from '@styledElements/ButtonsStyled'
import { setFlex, media, setColor, setPxToRem } from '@helpers'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/contact-page-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// Component
const contactPage = ({ data }) => {
  // Render Component
  return (
    <Layout background="var(--mediumBackground)">
      <SEO
        title="Nous Contacter"
        description="Contactez l'entreprise Capriati S.A."
        keywords="Nous contacter, formulaire de contact, Nos Coordonées, téléphone, e-mail"
        image="contact"
      />
      <Hero title="Nous Contacter" bcgImage={data.heroBcg.childImageSharp.fluid} />
      <ContactForm />
      <ContactSection background="var(--mediumBackground)">
        <Title tag="h3" title="Nos Coordonées" titleSection />
        <ContactSectionContent>
          <ContactInfo>
            <Title tag="h5" title="Adresse" noShadow />
            <Title tag="h6" title="Capriati S.A." noShadow />
            <p>
              Z.A. La Pièce 20 <br />
              1180 Rolle
            </p>
            <ButtonMap primary onClick={mapsSelector}><MapIcon/>Nous trouver</ButtonMap>
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
const ContactSection = styled(Section)`
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

export const ButtonMap = styled(Button)`
${setFlex()};
padding: ${setPxToRem(8)} ${setPxToRem(26)}
`

export const MapIcon = styled(Map)`
width:1.6rem;
height:auto;
`

export default contactPage
