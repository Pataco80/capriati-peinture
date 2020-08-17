import styled, {css} from 'styled-components'
import { layout } from '../../theme/helpers'


const BannerCss = css`
  padding: ${props => props.padding ? props.padding : `2rem`};
`

export const Banner = styled.div`
  ${BannerCss}
`

export const BannerCenter = styled.div`
  ${layout()};
  ${BannerCss}
`

