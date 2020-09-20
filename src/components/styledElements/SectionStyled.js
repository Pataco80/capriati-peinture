import styled, {css} from 'styled-components'
import { layout, setColor, media } from '../../theme/helpers'


const SectionCss = css`
  background-color: ${props => props.background ? props.background : `${setColor.mainWhite}`};
  padding: ${props => props.padding ? props.padding : `2rem`};
  width:100vw;

  ${media.greaterThan('tablet')`
    padding: ${props => props.padding ? props.padding : `3rem`};
  `}

  ${media.greaterThan('desktop')`
    padding: ${props => props.padding ? props.padding : `5rem`};
  `}
`

export const Section = styled.section`
  ${SectionCss}
`
export const SectionContent = styled.div`
  padding: ${props => props.padding ? props.padding : `1rem 0`};
  width:100%;
`

export const SectionCenter = styled.section`
  ${layout()};
  ${SectionCss}
`

export const SectionContentCenter = styled.div`
  ${layout()};
  padding: ${props => props.padding ? props.padding : `1rem 0`};
  width:100%;
`