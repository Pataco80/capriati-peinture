import { generateMedia } from 'styled-media-query'
import { lighten, darken } from 'polished'

// Colors Palette
const baseColor = {
  primaryColor: '#EE332D',
  mainBlack: '#222222',
  mainWhite: '#ffffff',
  mainGrey: '#617d98',
}

const polishedColor = {
  primaryDarken1: darken(0.15, `${baseColor.primaryColor}`),
  primaryDarken2: darken(0.25, `${baseColor.primaryColor}`),
  primaryLighten1: lighten(0.15, `${baseColor.primaryColor}`),
  primaryLighten2: lighten(0.25, `${baseColor.primaryColor}`),
  greyDarken1: darken(0.15, `${baseColor.mainGrey}`),
  greyDarken2: darken(0.25, `${baseColor.mainGrey}`),
  greyLighten1: lighten(0.15, `${baseColor.mainGrey}`),
  greyLighten2: lighten(0.25, `${baseColor.mainGrey}`),
  greyLighten3: lighten(0.45, `${baseColor.mainGrey}`),
  greyLighten4: lighten(0.6, `${baseColor.mainGrey}`),
}

export const setColor = {
  primaryColor: `${baseColor.primaryColor}`,
  primaryColorD1: `${polishedColor.primaryDarken1}`,
  primaryColorD2: `${polishedColor.primaryDarken2}`,
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
  mainGreyL4: `${polishedColor.greyLighten4}`,
}

// Convert Hex color to rgba function to box-shadow or text-shadow
const convertHexToRGBA = (hex, opacity) => {
  const tempHex = hex.replace('#', '')
  const r = parseInt(tempHex.substring(0, 2), 16)
  const g = parseInt(tempHex.substring(2, 4), 16)
  const b = parseInt(tempHex.substring(4, 6), 16)

  return `rgba(${r},${g},${b},${opacity / 100})`
}

/* If project as theme, paste the variables and export in GlobalStyles
export const setTheme = {
  light: {
    background: `${setColor.mainWhite}`,
    border: `${setColor.primaryColor}`,
    text: `${setColor.mainBlack}`,
    textShadow: `${setColor.mainGreyL1}`,
    highlight: `${setColor.primaryColor}`,
    highlightTopNavActive: `${setColor.primaryColor}`,
    highlightHovered: `${setColor.primaryColorD1}`,
    mediumBackground: `${setColor.mainGreyL3}`,
    lightBackground: `${setColor.mainWhite}`,
    white: `${setColor.mainWhite}`,
    black: `${setColor.mainWhite}`,
  },
  dark: {
    background: `${setColor.mainGreyD2}`,
    border: `${setColor.primaryColor}`,
    text: `${setColor.mainWhite}`,
    textShadow: `${setColor.mainBlack}`,
    highlight: `${setColor.primaryColorD1}`,
    highlightTopNavActive: `${setColor.mainWhite}`,
    highlightHovered: `${setColor.primaryColorD2}`,
    mediumBackground: `${setColor.mainGreyL2}`,
    lightBackground: `${setColor.mainGreyL2}`,
    white: `${setColor.mainWhite}`,
    black: `${setColor.mainBlack}`,
  },
}
*/

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
  "Helvetica",
  "Arial",
  "sans-serif"`,
}

// Unitie's Calc Functions
export const setPxToRem = (px = 16) => {
  return `${px / 16}rem`
}

export const setRem = (x) => {
  return `${x}rem`
}

export const breakpoints = {
  mobile: 320,
  smTablet: 576,
  tablet: 768,
  lgTablet: 992,
  desktop: 1200,
}

export const media = generateMedia({
  mobile: `${setPxToRem(breakpoints.mobile)}`,
  smTablet: `${setPxToRem(breakpoints.smTablet)}`,
  tablet: `${setPxToRem(breakpoints.tablet)}`,
  lgTablet: `${setPxToRem(breakpoints.lgTablet)}`,
  desktop: `${setPxToRem(breakpoints.desktop)}`,
})

// Layout's Functions
export const layout = ({ mW = 1140 } = {}) => {
  return `
    max-width:${setPxToRem(mW)};
    margin: 0 auto;
  `
}

export const setFlex = ({
  flex = 'auto',
  x = 'center',
  y = 'center',
  flDir = 'row',
  wrap = 'wrap',
} = {}) => {
  return `display: flex;
  flex:${flex};
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${flDir};
  flex-wrap: ${wrap}
  `
}

export const setGrid = ({
  x = 'space-evenly',
  y = 'space-evenly',
  xgap = 0,
  ygap = 0,
} = {}) => {
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
  allPx = null,
  allPc = null,
  radius = 4,
  tl = radius,
  tr = radius,
  bl = radius,
  br = radius,
} = {}) => {
  if (allPx) {
    return `
    border-radius: ${setPxToRem(allPx)};
    `
  } else if (allPc) {
    return `
    border-radius: ${allPc}%;
    `
  } else {
    return `
    border-top-left-radius: ${setPxToRem(tl)};
    border-top-right-radius: ${setPxToRem(tr)};
    border-bottom-left-radius: ${setPxToRem(bl)};
    border-bottom-right-radius: ${setPxToRem(br)};
  `
  }
}

export const setTransition = ({
  style = 'all',
  duration = 0.3,
  speedCurve = 'linear',
} = {}) => {
  return `transition: ${style} ${duration}s ${speedCurve}`
}

/*export const setShadow = {
  light: "box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);",
  dark: "box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);",
}*/

export const setShadow = (
  style = '',
  {
    inset = '',
    x = 0,
    y = 0,
    blur = 0,
    color = setColor.mainBlack,
    opacity = 100,
  } = {}
) => {
  if (style === 'light') {
    return `${inset} 0 2px 8px ${convertHexToRGBA(setColor.mainBlack, 30)};`
  }
  if (style === 'medium') {
    return `${inset} 0 3px 12px ${convertHexToRGBA(setColor.mainBlack, 50)};`
  }
  if (style === 'dark') {
    return `${inset} 0 5px 15px ${convertHexToRGBA(setColor.mainBlack, 80)};`
  }
  if (style === 'none') {
    return `none;`
  } else {
    return `${y}px ${x}px ${blur}px ${convertHexToRGBA(color, opacity)};`
  }
}
