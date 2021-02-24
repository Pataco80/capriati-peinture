import React from 'react'
import mapsSelector from '../utils/getGoogleMap'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'

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
const getData = graphql`
  {
    heroBcg: file(
      relativePath: { eq: "images/banners/contact-page-banner.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
        businessRoad
        businessRoadNumber
        businessZipCode
        businessCity
        businessShortCanton
        businessContry
        businessPhone
        businessFax
        businessEmail
      }
    }
  }
`

// Component
const ContactPage = () => {
  const { heroBcg, site } = useStaticQuery(getData)
  const {
    siteTitle,
    businessRoad,
    businessRoadNumber,
    businessZipCode,
    businessCity,
    businessShortCanton,
    businessContry,
    businessPhone,
    businessFax,
    businessEmail,
  } = site.siteMetadata

  // fonction de suppression d'espaces pour les liens
  const removeSpaces = (string) => {
    return string.replace(/\s/g, '')
  }
  console.log(siteTitle)
  const hrefPhone = `tel:${removeSpaces(businessPhone)}`
  const hrefEmail = `mailto:${businessEmail}`

  // Render Component
  return (
    <Layout background={`${setColor.mainGreyL3}`}>
      <SEO
        title='Nous Contacter'
        description={`Contactez l'entreprise ${siteTitle}.`}
        keywords='Nous contacter, formulaire de contact, Nos Coordonées, téléphone, e-mail'
        image='contact'
        shareTitle='Contactez-nous, nous sommes à votre entière disposition.'
      />
      <Hero title='Nous Contacter' bcgImage={heroBcg.childImageSharp.fluid} />
      <ContactForm />
      <ContactSection background={`${setColor.mainGreyL3}`}>
        <Title tag='h3' title='Nos Coordonées' titleSection />
        <ContactSectionContent>
          <ContactInfo>
            <Title tag='h5' title='Adresse' noShadow />
            <Title tag='h6' title={siteTitle} noShadow notMargin />
            <p>
              {businessRoad} {businessRoadNumber} <br />
              {businessZipCode} {businessCity} <br /> {businessShortCanton} -{' '}
              {businessContry}
            </p>
            <ButtonMap
              type='button'
              primary
              onClick={mapsSelector}
              title='Nous Trouver'
            >
              <MapIcon />
              Nous trouver
            </ButtonMap>
          </ContactInfo>
          <ContactInfo>
            <Title tag='h5' title='Contact' noShadow />
            <p>
              <PhoneAlt className='contactInfo-icon' /> :{' '}
              <a href={hrefPhone} title='Appelez-vous'>
                {businessPhone}
              </a>
            </p>
            <p>
              <Fax className='contactInfo-icon' /> : {businessFax}
            </p>
            <p>
              <Envelope className='contactInfo-icon' /> :{' '}
              <a href={hrefEmail} title='Ecrivez-nous un mail'>
                {businessEmail}
              </a>
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

const ButtonMap = styled(Button)`
  ${setFlex()};
  padding: ${setPxToRem(8)} ${setPxToRem(26)};
`

const MapIcon = styled(Map)`
  width: 1.6rem;
  height: auto;
`

export default ContactPage
