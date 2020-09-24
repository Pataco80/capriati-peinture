import React from 'react'

import {ButtonForm} from '../styledElements/Button'
import Title from '../Title'
import {Section} from '../styledElements/SectionStyled'

import * as S from './ContactFormStyled'
const Contactform = () => {
  return (
    <Section>
      <Title tag='h3' title='Contactez-nous via notre formulaire' titleSection/>
      <S.FormContainer padding='0'>
        <S.ContactForm
          action="https://formspree.io/xlenaazr"
          method="POST"
        >
          <S.ContactInfo>
            <S.ContactName>
              <S.Label htmlFor="name">Nom</S.Label>
              <S.Input
                type='text'
                name='name'
                id='name'
                placeholder='Saisissez votre Nom'
              />
            </S.ContactName>
            <S.ContactMail>
              <S.Label htmlFor="email">Email</S.Label>
              <S.Input
                type="email"
                name="email"
                id="email"
                placeholder='Saisissez votre adresse mail'
              />
            </S.ContactMail>
          </S.ContactInfo>
          <S.ContactMessage>
            <S.Label htmlFor="message">Message</S.Label>
            <S.TextArea
              name="message"
              id="message"
              placeholder="Saisissez votre Message"
              rows="10"
            />
            <S.Input type="text" name="_gotcha" style={{display:'none'}} />
          </S.ContactMessage>
          <>
            <ButtonForm primary type="submit" value='Envoyer' />
          </>
        </S.ContactForm>
      </S.FormContainer>
    </Section>
    
  )
}



export default Contactform
