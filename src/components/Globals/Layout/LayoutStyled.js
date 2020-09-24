import styled from 'styled-components'
import { setColor, setFlex, setPxToRem } from '../../../theme/helpers'
// Styles from styled-components
export const AppWrapper = styled.div`
  background-color: ${setColor.mainWhite};
  width:100vw;
  min-height:100vh;
`

export const PageContainer = styled.main`
  ${setFlex({flDir:'column'})};
  z-index:2;

  &.isScroll {
    margin-top:${setPxToRem(62)};
  }
`
