import styled, {css} from 'styled-components'
import { layout, setColor } from '../../theme/helpers'


const SectionCss = css`
  background-color: ${props => props.background ? props.background : `${setColor.mainWhite}`};
  padding: ${props => props.padding ? props.padding : `2rem`};
`

export const Section = styled.section`
  ${SectionCss}
`

export const SectionCenter = styled.section`
  ${layout()};
  ${SectionCss}
`

