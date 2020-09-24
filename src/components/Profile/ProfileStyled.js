import styled from 'styled-components'

import { setFlex } from '../../theme/helpers'

export const ProfileWrapper = styled.div`
  ${setFlex({flDir:'column'})};
  width:100%;
`

export const ProfileName = styled.h4`
  text-align:center;
`
export const ProfileJob = styled.h6`
  text-align:center;
`