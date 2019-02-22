import { lighten } from 'polished'

const blue = '#0000ff'
const colors = {
  primary: blue, // Color for buttons or links
  primaryLight: lighten(0.05, blue),
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)'
  },
  white: 'white'
}

const transitions = {
  normal: '0.3s'
}

const fontSize = {
  small: '0.9rem'
}

const fontFamily = {
  sansSerif: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  mono: `'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace`
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px'
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '18px'
}

export default theme
