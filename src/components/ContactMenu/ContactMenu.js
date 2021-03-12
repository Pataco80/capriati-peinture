import React from 'react'

// Import Hooks
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import Components for App
import { MapBtn } from '@components'
import { Phone, MailSend } from '@styled-icons/boxicons-regular'

// Import styles from styled-components file
import * as S from './ContactMenuStyled'

// Component
const ContactMenu = () => {
  // component variables
  const { businessPhone, businessEmail } = useSiteMetadata()

  // fonction de suppression d'espaces pour les liens
  const removeSpaces = (string) => {
    return string.replace(/\s/g, '')
  }

  // Constantes pour les liens
  const hrefPhone = `tel:${removeSpaces(businessPhone)}`
  const hrefEmail = `mailto:${businessEmail}`

  // Render Component
  return (
    <S.ContactMenuWrapper>
      <S.ContactMenuLink
        className='btnIconBar'
        href={hrefPhone}
        title='Appelez-vous'
      >
        <Phone />
      </S.ContactMenuLink>
      <S.ContactMenuLink
        className='btnIconBar'
        href={hrefEmail}
        title='Ecrivez-nous un mail'
      >
        <MailSend />
      </S.ContactMenuLink>
      <MapBtn className='btnIconBar mapIconBar' />
    </S.ContactMenuWrapper>
  )
}

export default ContactMenu
