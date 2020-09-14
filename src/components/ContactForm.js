import React from 'react'
import styled, {css} from 'styled-components'

import {Section, SectionContent} from './styledElements/SectionStyled'
import {ButtonForm} from './styledElements/Button'
import { setFlex, layout, media, setRadius, setBorder, setColor, setShadow, setFont } from '../theme/helpers'
import Title from './Title'

const Contactform = () => {
  return (
    <Section>
      <Title tag='h3' title='Contactez-nous via notre formulaire' titleSection/>
      <FormContainer padding='0'>
        <ContactForm
          action="https://formspree.io/xlenaazr"
          method="POST"
        >
          <ContactInfo>
            <ContactName>
              <Label htmlFor="name">Nom</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Saisissez votre Nom'
              />
            </ContactName>
            <ContactMail>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder='Saisissez votre adresse mail'
              />
            </ContactMail>
          </ContactInfo>
          <ContactMessage>
            <Label htmlFor="message">Message</Label>
            <TextArea
              name="message"
              id="message"
              placeholder="Saisissez votre Message"
              rows="10"
            />
            <Input type="text" name="_gotcha" style={{display:'none'}} />
          </ContactMessage>
          <>
            <ButtonForm primary type="submit" value='Envoyer' />
          </>
        </ContactForm>
      </FormContainer>
    </Section>
    
  )
}

const ContactInput = css`
  font-family: ${setFont.bodyFont};
  font-size:1rem;
  width:100%;
  padding:1.5rem;
  margin:1rem 0 3rem;
  ${setRadius(12)};
  border:${setBorder({size:1, style:'solid', color:setColor.primaryColor})};
  ${setShadow('light')};

  &:focus {
    ${setShadow('light', {inset:'inset'})};
    outline:none;
  }
  &::placeholder {
    font-style:italic;
  }
`

const FormContainer = styled(SectionContent)`
${layout({mW:800})};
  ${setFlex({flDir:'column'})};

`
const ContactForm = styled.form`
  ${setFlex({flDir:'column'})};
  width:100%;
`
const ContactInfo = styled.section`
  width:100%;



  ${media.greaterThan('smTablet')`
  ${setFlex({x:'space-between'})};
  `}
`
const ContactMessage = styled.section`
  width:100%;
`

const ContactName = styled.div`
  width:100%;
  ${media.greaterThan('smTablet')`
    width:45%;
  `}
`
const ContactMail = styled.div`
  width:100%;
  ${media.greaterThan('smTablet')`
    width:45%;
  `}
`

const Label = styled.label`
  font-family: ${setFont.headingsFont};
  color: ${setColor.primaryColor};
`

const Input = styled.input`
  ${ContactInput}


`

const TextArea = styled.textarea`
  ${ContactInput}
  resize: none;
`

export default Contactform
