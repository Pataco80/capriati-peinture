import styled from 'styled-components'

// Import Components for App
import { Section, SectionContent } from '../styledElements/SectionStyled'
import { GatsbyButtonLink } from '../styledElements/ButtonsStyled'

// Import helpers
import { layout, setFlex, media } from '../../theme/helpers'

// Export Styles for the component
export const AboutWrapper = styled(Section)`
  ${setFlex({flDir:'column'})};
`

export const AboutContent = styled(SectionContent)`
  ${layout()};
  ${setFlex({flDir:'column',wrap:'nowrap'})};

  ${media.greaterThan('tablet')`
    ${setFlex({flDir:'row'})};
  `}
`

export const AboutArticle = styled.article`
  ${setFlex()};

  ${media.greaterThan('tablet')`
    width:60%;
  `}
`

export const AboutImgContainer = styled.div`
  width:100%;
  max-width:250px;
  padding:2rem 0 0 0;

  ${media.greaterThan('tablet')`
    padding:0 0 0 1.5rem;
  `}
`

export const AboutLink = styled(GatsbyButtonLink)`
  margin:3rem 0 1rem;
`