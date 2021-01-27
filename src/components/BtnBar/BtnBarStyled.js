import styled from 'styled-components'
import { setFlex, setBorder, setPxToRem, setColor } from '@helpers'
import media from 'styled-media-query'

// Import Components for App
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Component Styles
export const MenuBarWrapper = styled.section`
  ${setFlex({ x:'space-between', y:'center'})};
  position:fixed;
  bottom:0;
  width:100%;
  height:auto;
  background-color:${setColor.primaryColor};
  border-top:${setBorder({size:2})};
  padding: 0 ${setPxToRem(16)};
  z-index:200;
  
  ${media.greaterThan('medium')`
    ${setFlex({flDir:'column', x:'space-between', y:'center'})};
    position:fixed;
    right:0;
    height:100vh;
    width:auto;
    border-left:${setBorder({size:2})};
    padding: ${setPxToRem(16)} ${setPxToRem(4)};
  `}
`

export const MenuBarGroup = styled.div`
  ${setFlex()};

  ${media.greaterThan('medium')`
    ${setFlex({flDir:'column'})};
  `}
`

export const MenuBarLink = styled(AniLink)`
${setFlex()};
width:${setPxToRem(38)};
margin: 0 ${setPxToRem(4)} 0 0;
span{
  padding:${setPxToRem(2)};
  ${media.greaterThan('medium')`
  padding-right:${setPxToRem(3)} !important;
  `}
}

${media.greaterThan('medium')`
${setFlex({x:'center'})};
  width:${setPxToRem(42)};
  margin: ${setPxToRem(4)} 0 ${setPxToRem(12)} 0;
 `}
${media.greaterThan('large')`
  width:${setPxToRem(44)};
  margin: ${setPxToRem(4)} 0 ${setPxToRem(20)} 0;
 `}

`

export const MenuBarItem = styled.span`
display:block;
width:${setPxToRem(45)};
cursor:pointer;
color:var(--texts);
padding:${setPxToRem(4)};
margin:0;
  &:hover {
    color: var(--highlight);
  }

  
  ${media.greaterThan('medium')`
    padding:${setPxToRem(12)} ${setPxToRem(4)};
    width:${setPxToRem(38)};

  `}
  ${media.greaterThan('large')`
  width:${setPxToRem(48)};
 `}
`