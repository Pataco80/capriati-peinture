import React from 'react'
import styled from 'styled-components'
import {BannerCenter} from './styledElements/BannerStyled'
import Title from './Title'
import { setColor } from '../theme/helpers'
const Banner = ({title}) => {
  return (
    <BannerWrapper>
      <Title tag='h1' title={title} />
    </BannerWrapper>
  )
}

const BannerWrapper = styled(BannerCenter)`
text-shadow: 3px 3px 3px ${setColor.mainBlack};
`

export default Banner
