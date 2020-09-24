import styled from 'styled-components'

import { setFlex, media } from '../../../theme/helpers'

export const HistoryProfileWrapper = styled.div`
  ${setFlex({flDir:'column'})};
  width:100%;

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row',y:'flex-start'})};
  `}
`

export const ProfileItem = styled.div`
  margin-bottom:2rem;
  width:100%;

  ${media.greaterThan('tablet')`
    width:33%;
    margin-bottom:0;
    padding:0 1rem;
  `}
`