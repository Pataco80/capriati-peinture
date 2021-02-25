import React from 'react'

// Import utils
import { getMeta } from '../../utils/getHeadTags'
import useSiteMetadata from '../../hooks/useSiteMetadata'
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
const ShareBtn = ({ isOpen, className, currentPage }) => {
  // Component Variables
  const { siteUrl } = useSiteMetadata()
  const hashTag = getMeta('og:hashtag')
  const socialTitle = getMeta('og:quote')
  const metaImage = getMeta('og:image')
  const url = `${siteUrl}${currentPage}`
  //const newUrl = `${siteUrl}${location.pathname}`
  console.log(`sharemenu: ${url}`)

  // Render Component
  return (
    <>
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
    </>
  )
}

export default ShareBtn
