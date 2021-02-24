import React from 'react'

// Import Hooks
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import Components for App
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

// Import styles from styled-components file
import * as S from './ShareMenuStyled'

// Component
const ShareBtn = ({ isOpen, className }) => {
  // Component Variables
  const { siteUrl } = useSiteMetadata()
  const url = `${siteUrl}${window.location.pathname}`

  // Component Functions
  function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta')
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('property') === metaName) {
        return metas[i].getAttribute('content')
      }
    }
    return metas
  }

  // Datas extracted for getMeta function
  const hashTag = getMeta('og:hashtag')
  const socialTitle = getMeta('og:quote')
  const metaImage = getMeta('og:image')

  // Render Component
  return (
    <S.ShareBtnWrapper
      className={isOpen ? `menu-visible ${className}` : `${className}`}
    >
      <FacebookShareButton url={url} quote={socialTitle} hashtag={hashTag}>
        <FacebookIcon size={42} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={socialTitle} hashtag={hashTag}>
        <TwitterIcon size={42} round={true} />
      </TwitterShareButton>
      <PinterestShareButton
        url={url}
        media={`${metaImage}`}
        description={socialTitle}
      >
        <PinterestIcon size={42} round />
      </PinterestShareButton>
      <WhatsappShareButton url={url} title={socialTitle} separator=':: '>
        <WhatsappIcon size={42} round={true} />
      </WhatsappShareButton>
    </S.ShareBtnWrapper>
  )
}

export default ShareBtn
