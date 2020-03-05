import { lighten } from 'polished'

const blue = '#18359A'
const cream = '#FFFAEC'
const colors = {
  cream,
  primary: 'black', // Color for buttons or links
  primaryMedium: lighten(0.4, blue),
  primaryLight: lighten(0.5, blue),
  bg: 'white', // Background color

  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },

  blacks: [
    'rgba(0,0,0,.0125)',
    'rgba(0,0,0,.025)',
    'rgba(0,0,0,.05)',
    'rgba(0,0,0,.1)',
    'rgba(0,0,0,.2)',
    'rgba(0,0,0,.3)',
    'rgba(0,0,0,.4)',
    'rgba(0,0,0,.5)',
    'rgba(0,0,0,.6)',
    'rgba(0,0,0,.7)',
    'rgba(0,0,0,.8)',
    'rgba(0,0,0,.9)',
  ],
  whites: [
    'rgba(255,255,255,.0125)',
    'rgba(255,255,255,.025)',
    'rgba(255,255,255,.05)',
    'rgba(255,255,255,.1)',
    'rgba(255,255,255,.2)',
    'rgba(255,255,255,.3)',
    'rgba(255,255,255,.4)',
    'rgba(255,255,255,.5)',
    'rgba(255,255,255,.6)',
    'rgba(255,255,255,.7)',
    'rgba(255,255,255,.8)',
    'rgba(255,255,255,.9)',
  ],

  white: '#ffffff',
}

const transitions = {
  normal: '0.3s',
}

const fontSize = {
  small: '0.9rem',
}

const fontFamily = {
  serif: `spectral, times, georgia, serif`,
  sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  mono: `'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace`,
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '830px',
  baseFontSize: '18px',
}

export default theme
