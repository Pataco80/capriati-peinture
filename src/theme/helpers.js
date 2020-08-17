import { generateMedia } from 'styled-media-query'
import {lighten,darken} from 'polished'

// Colors Palette
const baseColor = {
  primaryColor: '#EE332D',
  mainBlack: '#222',
  mainWhite: '#fff',
  mainGrey: '#617d98',
}

const polishedColor = {
  primaryDarken1: darken(0.15, `${baseColor.primaryColor}`),
  primaryDarken2: darken(0.2, `${baseColor.primaryColor}`),
  primaryLighten1: lighten(0.15, `${baseColor.primaryColor}`),
  primaryLighten2: lighten(0.2, `${baseColor.primaryColor}`),
  greyDarken1: darken(0.15, `${baseColor.mainGrey}`),
  greyDarken2: darken(0.2, `${baseColor.mainGrey}`),
  greyLighten1: lighten(0.2, `${baseColor.mainGrey}`),
  greyLighten2: lighten(0.3, `${baseColor.mainGrey}`),
  greyLighten3: lighten(0.45, `${baseColor.mainGrey}`),
}

export const setColor = {
  primaryColor: `${baseColor.primaryColor}`,
  primaryColorD1: `${polishedColor.primaryDarken1}`,
  primaryColorD2: `${polishedColor.primaryDarken}`,
  primaryColorL1: `${polishedColor.primaryLighten1}`,
  primaryColorL2: `${polishedColor.primaryLighten2}`,
  mainWhite: `${baseColor.mainWhite}`,
  mainBlack: `${baseColor.mainBlack}`,
  mainGrey: `${baseColor.mainGrey}`,
  mainGreyD1: `${polishedColor.greyDarken1}`,
  mainGreyD2: `${polishedColor.greyDarken2}`,
  mainGreyL1: `${polishedColor.greyLighten1}`,
  mainGreyL2: `${polishedColor.greyLighten2}`,
  mainGreyL3: `${polishedColor.greyLighten3}`,
}

const convertHexToRGBA = (hex, opacity) => {
  const tempHex = hex.replace('#', '');
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

/*
// If project as theme, paste the variables and export in GlobalStyles
export const setTheme = {
  dark : {
  },
  light : {
    
  }
}*/


// Fonts Palette
export const setFont = {
  headingsFont: 'Noto Sans JP',
  bodyFont: 'Roboto',
  defaultFonts: `"system",
  "-apple-system",
  ".SFNSText-Regular",
  "San Francisco",
  "Roboto",
  "Segoe UI",
  'Helvetica',
  'Arial',
  "sans-serif"`,
}



export const media = generateMedia({
  mobile: '15rem',
  smTablet: '36rem',
  tablet: '48rem',
  lgTablet: '62rem',
  desktop: '75rem',
});

// Unitie's Calc Functions
export const setPxToRem = (px = 16) => {
  return `${px / 16}rem`
}

// Layout's Functions
export const layout = ({mW = 1140, pdX = 8, pdY = 0} = {}) => {
  return `
    max-width:${setPxToRem(mW)};
    margin: 0 auto;
    padding: ${setPxToRem(pdY)} ${setPxToRem(pdX)};`
}



export const setFlex = ({ x = 'center', y = 'center', flDir = 'row', wrap = 'wrap'} = {}) => {
  return `display: flex;
  flex:auto;
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${flDir};
  flex-wrap: ${wrap}
  `
}

export const setGrid = ({ x = 'space-evenly', y = 'space-evenly', xgap = 0, ygap = 0} = {}) => {
  return `display: grid;
  justify-content: ${x};
  align-content: ${y};
  grid-row-gap: ${xgap}rem;
  grid-column-gap: ${xgap}rem;
  `
}

// Images and Background's Functions
export const setLinearBcg = ({
  colStart = 'rgba(0, 0, 0, 0)',
  colEnd = 'rgba(0, 0, 0, 0)',
} = {}) => {
  return `background: linear-gradient(${colStart}, ${colEnd});
    opacity: 1 !important;
`
}


export const setImgBcg = ({
  size = 'cover',
  position = 'center',
  repeat = 'no-repeat',
} = {}) => {
  return `background-size: ${size} !important;
  background-position: ${position} !important;background-repeat: ${repeat} !important;
`
}

// Effect's Functions or props Object's
export const setLetterSpacing = (number = 3.2) => {
  return `letter-spacing: ${setPxToRem(number)}`
}

export const setBorder = ({
  size = 2,
  style = 'solid',
  color = 'transparent',
} = {}) => {
  return `${setPxToRem(size)} ${style} ${color}`
}

export const setRadius = ({
  radius = 4,
  tl = radius,
  tr = radius,
  bl = radius,
  br = radius
} = {}) => {
  return `
    border-top-left-radius: ${setPxToRem(tl)};
    border-top-right-radius: ${setPxToRem(tr)};
    border-bottom-left-radius: ${setPxToRem(bl)};
    border-bottom-right-radius: ${setPxToRem(br)};
  `
}

export const setTransition = ({
  style = 'all',
  duration = 0.3,
  speedCurve = 'linear',
} = {}) => {
  return `transition: ${style} ${duration}s ${speedCurve}`
}

/*export const setShadow = {
  light: 'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);',
  dark: 'box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);',
}*/

export const setShadow = (style = '', {x = 0, y = 0, blur = 0, color = setColor.mainBlack, opacity = 100} = {}) => {
  if (style === 'light') {
    return `box-shadow: 0 2px 8px ${convertHexToRGBA(setColor.mainBlack,30)};`
  }
  if (style === 'dark') {
    return `box-shadow: 0 5px 15px ${convertHexToRGBA(setColor.mainBlack,80)};`
  }
  else {
    return `box-shadow: ${y}px ${x}px ${blur}px ${convertHexToRGBA(color,opacity)};`
  }
}