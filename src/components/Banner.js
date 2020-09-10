import React from 'react'
import styled from 'styled-components'
import {BannerCenter} from './styledElements/BannerStyled'
import Title from './Title'
import { setFlex } from '../theme/helpers'
const Banner = ({title, children}) => {
  return (
    <BannerWrapper>
      <Title tag='h1' title={title} />
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled(BannerCenter)`
${setFlex({flDir:'column'})};
`

export default Banner
