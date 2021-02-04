import React from 'react'

// Import Hooks
import useDeviceDetect from '../../hooks/useDeviceDetect'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'

// Import Components for App
import { Phone, MailSend, Map } from '@styled-icons/boxicons-regular'
import { ToTopBtn, MapBtn } from '@components'

// Import styles from styled-components file
import * as S from './BtnBarStyled'

// Import StyledElements for basic styles
import { ButtonLink } from '@styledElements/ButtonsStyled'

const getData = graphql`
  {
    site {
      siteMetadata {
        businessPhone
        businessEmail
      }
    }
  }
`

// Component
const MenuBar = () => {
  // component variables
  const { site } = useStaticQuery(getData)
  const { businessPhone, businessEmail } = site.siteMetadata
  const { isMobile } = useDeviceDetect()

  const hrefPhone = `tel:${businessPhone}`.replaceAll(' ', '')
  const hrefEmail = `mailto:${businessEmail}`

  // Render Component
  return (
    <>
      {isMobile && (
        <S.MobileWrapper>
          <S.MenuBarGroup>
            <ButtonLink className="btnIconBar" href={hrefPhone}>
              <Phone />
            </ButtonLink>
            <ButtonLink className="btnIconBar" href={hrefEmail}>
              <MailSend />
            </ButtonLink>
            <MapBtn className="btnIconBar mapIconBar" />
          </S.MenuBarGroup>
          <S.MenuBarGroup>
            <ToTopBtn className="btnIconBar" />
          </S.MenuBarGroup>
        </S.MobileWrapper>
      )}
      {!isMobile && (
        <S.DesktopWrapper>
          <S.MenuBarGroup className="desktop">
            <ToTopBtn showBelow={500} className="btnIconBar btnTop" />
          </S.MenuBarGroup>
        </S.DesktopWrapper>
      )}
    </>
  )
}

export default MenuBar
