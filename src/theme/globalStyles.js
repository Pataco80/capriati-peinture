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
  font-size: calc(1rem + 0.35vw); /* Responsive base font size */
  line-height: calc(1rem + 1.05vw); /* Responsive Vertical Rhythm */
  ${setLetterSpacing(1.3)}
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${setFont.headingsFont};
  margin: calc(1rem + 1vw) 0; /* Responsive margins */
}

h1 {
  font-size: 3.713rem;
  line-height: calc(1.3rem + 1.8vw); /* Responsive Vertical Rhythm */
}

h2 {
  font-size: 2.856rem;
  line-height: calc(1.3rem + 1vw); /* Responsive Vertical Rhythm */
}

h3 {
  font-size: 2.197rem;
  line-height: calc(1.3rem + 0.7vw); /* Responsive Vertical Rhythm */
}

h4 { font-size: 1.9rem; }
h5 { font-size: 1.7rem; }
h6 { font-size: 1.4rem; }

h4, h5, h6 { 
  line-height: calc(1.3rem + .2vw); /* Responsive Vertical Rhythm */
  margin: calc(1rem + 0.2vw) 0;
}
p {
  margin: 0 0 calc(1rem + 1vw) 0;
}
`

export default GlobalStyle