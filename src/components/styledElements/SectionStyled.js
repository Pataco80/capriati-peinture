import styled, {css} from 'styled-components'
import { layout, setColor, media } from '../../theme/helpers'


const SectionCss = css`
  width:100%;
  background-color: ${props => props.background ? props.background : `${setColor.mainWhite}`};
  padding: ${props => props.padding ? props.padding : `1rem`};

  ${media.greaterThan('smTablet')`
    padding: ${props => props.padding ? props.padding : `2rem`};
  `}

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
  padding: ${props => props.padding ? props.padding : `1rem`};
`

export const SectionCenter = styled.section`
  ${layout()};
  ${SectionCss}
`

export const SectionContentCenter = styled.div`
  ${layout()};
  padding: ${props => props.padding ? props.padding : `1rem`};
`