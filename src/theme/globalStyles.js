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
    font-size:calc(0.5rem + 1vw);
    line-height: calc(12px + 1.05vw);
    letter-spacing: ${setLetterSpacing(0)};
    background-color:${setColor.mainWhite};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${setFont.headingsFont};
    color:${setColor.primaryColor};
    margin: calc(12px + 1.05vw) 0;
  }
  h1 {
  font-size: 1.912em;
  line-height: calc(18px + 1.8vw); /* Responsive Vertical Rhythm */
}
  h2 {
    font-size: 1.616em;
    line-height: calc(18px + 1vw); /* Responsive Vertical Rhythm */
  }
  h3 {
    font-size: 1.471em;
    line-height: calc(18px + .7vw); /* Responsive Vertical Rhythm */
  }
  h4 { font-size: 1.3em; }
  h5 { font-size: 1.243em; }
  h6 { font-size: 1.132em; }

  h4, h5, h6 { 
    line-height: calc(18px + .2vw); /* Responsive Vertical Rhythm */
  }
`

export default GlobalStyle