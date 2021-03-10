import React from 'react'

// Import Components for App
import { Title } from '@components'
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import StyledElements for basic styles
import { Section } from '@styledElements/SectionStyled'
import { ButtonForm } from '@styledElements/ButtonsStyled'

// Import styles from styled-components file
import * as S from './ContactFormStyled'

// Component
const Contactform = () => {
  const { formSpreeId } = useSiteMetadata()
  // Render Component
  return (
    <Section>
      <Title
        tag='h3'
        title='Contactez-nous via notre formulaire'
        titleSection
      />
      <S.FormContainer padding='0'>
        <S.ContactForm
          action={`https://formspree.io/${formSpreeId}`}
          method='POST'
          autocomplete='on'
        >
          <S.ContactInfo>
            <S.ContactName>
              <S.Label htmlFor='name'>Nom</S.Label>
              <S.Input
                type='text'
                name='name'
                id='name'
                placeholder='Saisissez votre Nom'
              />
            </S.ContactName>
            <S.ContactMail>
              <S.Label htmlFor='email'>Email</S.Label>
              <S.Input
                type='email'
                name='email'
                id='email'
                placeholder='Saisissez votre adresse mail'
              />
            </S.ContactMail>
          </S.ContactInfo>
          <S.ContactMessage>
            <S.Label htmlFor='message'>Message</S.Label>
            <S.TextArea
              name='message'
              id='message'
              placeholder='Saisissez votre Message'
              rows='10'
            />
          </S.ContactMessage>
          <S.Input type='text' name='_gotcha' style={{ display: 'none' }} />
          <ButtonForm
            primary
            type='submit'
            value='Envoyer'
            title='Envoyer le formulaire'
          />
        </S.ContactForm>
      </S.FormContainer>
    </Section>
  )
}

export default Contactform
