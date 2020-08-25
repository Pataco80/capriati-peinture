import React from 'react'
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'
const Title = (props) => {
  const { title, tag:Tag, hidden, children } = props
  return (
    <TitleWrapper hidden={hidden}>
      <Tag>{title || children}</Tag>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  ${setFlex()};
  text-align:center;

  ${({hidden}) => hidden &&`
      display:none !important;
  `}
`

export default Title
