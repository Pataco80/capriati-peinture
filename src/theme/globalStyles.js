import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'
import { setColor, setFont, setLetterSpacing } from './helpers'

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${setFont.bodyFont};
    font-size: 1rem;
    color: ${setColor.mainBlack};
  }
  
  body {
    font-family: ${setFont.bodyFont};
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: ${setLetterSpacing(0)};
    background-color:${setColor.mainWhite};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${setFont.headingsFont};
    color:${setColor.primaryColor};
  }
`

export default GlobalStyle