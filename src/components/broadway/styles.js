import styled from 'styled-components'

export const lineThickness = '1px'
export const gridUnit = '4px'
export const gridWidth = '960px'
export const gridHeight = '960px'
export const gridColumns = '240'
export const gridVisualColor = 'hsla(204, 80%, 72%, 0.25)'
export const ephemeralColor = 'hsla(204, 80%, 72%, 0.75)'
export const transitionSpeedDefault = '0.4s'

export const LabelSecondary = styled.div`
  font-size: 5px;
  text-align: center;
`

export const colors = {
  yellow: '#ebd532',
  red: '#9b2f23',
  blue: '#4163b6',
  lightgrey: '#dddddb',
  white: '#f2f3ee',
  clay: '#233239',
  conifer: '#bae465',
  black87: 'rgba(0,0,0,0.87)',
}

export const EphemeralRectangle = styled.div`
  background: ${ephemeralColor};
`

export const Title = styled.h1`
  font-size: 1em;
  padding: 1em 0;
`

// A container that establishes some CSS variables
//
export const Container = styled.div`
  position: relative;
  cursor: crosshair;
  background-color: ${colors.white};
  body {
    font-size: 16px;
    margin: 0;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  /* Settings */
  & {
    --columns: ;
    --baseline: ${gridUnit};
    --line-thickness: ${lineThickness};
    --visual-grid-color: ${gridVisualColor};
    --container-height: ${gridWidth};
    --container-width: ${gridHeight};
  }
`

// The grid container
// Immediate children are grid items ... this is used multiple times to achieve overlaying grids
export const GridPrimary = styled.div`
  opacity: 0.9;
  display: grid;
  grid-template-columns: repeat(${gridColumns}, ${gridUnit});
  grid-template-rows: repeat(${gridColumns}, ${gridUnit});
  width: ${gridWidth};
  height: ${gridColumns};
  mix-blend-mode: ${props => props.mixBlendMode};

  & > div {
    // Toggleable grid items
    // We toggle this here (instead of the child items) for performance
    visibility: ${props => (props.visibleGridItems ? 'visible' : 'hidden')};
    transition: opacity ${transitionSpeedDefault};

    // Toggleable marks
    & > div {
      visibility: ${props => (props.visibleMarks ? 'visible' : 'hidden')};
    }
  }
`

const rowGradient = `
  to bottom,
  ${ephemeralColor},
  transparent ${lineThickness},
  transparent ${gridUnit}
`

const columnGradient = `
  to right,
  ${ephemeralColor},
  transparent ${lineThickness},
  transparent ${gridUnit}
`

// A CSS overlay that mimics the grid rows and columns
//  using a repeating background image
//
export const GridVisual = styled.div`
  position: absolute;
  width: ${gridWidth};
  height: ${gridHeight};
  opacity: ${props => (props.visibleGrid ? '1' : '0')};
  transition: opacity ${transitionSpeedDefault};
  background-image: repeating-linear-gradient(${columnGradient}), repeating-linear-gradient(${rowGradient});
  background-size: 100% 100%;
  background-position: 0;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: multiply;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

// The grid items
// Position relative to contain debugging marks
// Z-index is -1 by default (TODO: Revisit z-indexes)
export const Item = styled.div`
  ${props => (props.area ? `grid-area: ${props.area};` : null)}
  position: relative;
  z-index: ${props => (props.zIndex ? props.zIndex : -1)};
`

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

// Marks
//
export const Mark = styled.div`
  position: absolute;
  font-size: 5px;
  width: 4px;
  height: 4px;
`

export const TopLeftMark = styled(Mark)`
  top: 0;
  left: 0;
  border-top: 1px solid aqua;
  border-left: 1px solid aqua;
`

export const BottomRightMark = styled(Mark)`
  bottom: 0;
  right: 0;
  border-bottom: 1px solid aqua;
  border-right: 1px solid aqua;
`

export const Art = styled.div`
  background: url('http://unthinkingly.com/static/reference/mondrian-broadway.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: ${gridWidth};
  height: ${gridHeight};
  position: absolute;
  opacity: ${props => (props.visibleArt ? '0.8' : '0')};
  transition: opacity 0.5s;
  z-index: 0;
`
export const ButtonGroup = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  flex-wrap: nowrap;
  &:last-of-type {
    border-right-width: 0;
  }
`

export const Button = styled.a`
  padding: 4px;
  text-transform: uppercase;
  background-color: ${props => (props.active ? 'lightgrey' : 'transparent')};
  display: inline-block;
  margin-right: 8px;
  border-radius: 2px;
  font-size: 8px;
  transition: background-color 0.2s;
  border: 1px solid lightgrey;
  &:hover {
    border: 1px solid grey;
  }
`

export const ToolsPanel = styled.div`
  background-color: white;
  font-size: 8px;
  padding: 8px;
  opacity: 1;
  z-index: 2;
  cursor: default;
`

export const EphemeralRectangleInPixels = styled.div`
  border: 1px solid black;
`
const fontStack = {
  primary: "'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Helvetica', 'sans-serif'",
  mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace",
}

export const font = {
  display2: `500 45px/54px ${fontStack.primary};`,
  display1: `500 34px/40px ${fontStack.primary};`,
  headline: `500 24px/32px ${fontStack.primary};`,
  subheading2: `500 20px/32px ${fontStack.primary};`,
  subheading1: `500 20px/28px ${fontStack.primary};`,
  body2: `400 16px/24px ${fontStack.primary};`,
  body1: `400 16px/20px ${fontStack.primary};`,
  caption: `400 13px/16px ${fontStack.primary};`,
  mono: `400 13px/16px ${fontStack.mono};`,
}

export const Console = styled.div`
  overflow-y: auto;
  font: ${font.mono};
  margin-bottom: 8px;
  max-height: 90vh;
  min-height: 90vh;
  padding: 1em;
  overflow: auto;

  pre {
    background-color: inherit!important;
    overflow: hidden !important;
    padding: 0 !important;
  }
  &:before {
    content: "JSON output";
    color: #ff625f;
    display: block
  }
`


// Dot background
const dotSize = '2px';
const dotSpace = '22px';

const DotBackground = styled.div`
  background-color: ${colors.black};
  background:
      linear-gradient(90deg, ${colors.blue} (${dotSpace} - ${dotSize}), transparent 1%) center,
      linear-gradient($bg-color (${dotSpace} - ${dotSize}), transparent 1%) center,
      $dot-color;
    background-size: ${dotSpace} ${dotSpace};
`;

export const NativeButton = styled.button`
  font-size: 12px; 
  margin: 0.5em 0.3em 0.5em 0;`

// Outer layout (app chrome)
//

const size = {
  header: '70px',
  sidebarRight: '300px',
  sidebarLeft: '200px',
}
export const OuterContainer = styled(DotBackground)`
  display: grid;
  grid-template-columns: 1fr auto 2fr;
  grid-template-rows: 1fr auto;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  grid-template-areas:
    'header header header'
    'sidebarLeft main sidebarRight'
`;

export const SidebarLeft = styled.div`
  grid-area: sidebarLeft;
  min-width: ${size.sidebarLeft};
  border-right: 1px solid ${colors.lightgrey};
`;

export const SidebarRight = styled.div`
  grid-area: sidebarRight;
  min-width: ${size.sidebarRight};
  border-left: 1px solid ${colors.lightgrey};
`;

export const Main = styled.div`
  grid-area: main;
`;

export const Header = styled.div`
  grid-area: header;  
  height: ${size.header};
  border-bottom: 1px solid ${colors.lightgrey};
  display: flex; 
  flex-align: center;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

