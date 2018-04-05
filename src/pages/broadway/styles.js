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

  & > div {
    /* Toggleable grid items */
    transition: opacity ${transitionSpeedDefault};
    visibility: ${props => (props.visibleGridItems ? 'visible' : 'hidden')};

    /* Toggleable ebugging marks on grid items */
    &::before,
    &::after {
      display: block;
      visibility: visible;
      position: absolute;
      font-size: 5px;
      color: aqua;
      transition: opacity ${transitionSpeedDefault};
      opacity: ${props => (props.visibleMarks ? '1' : '0')};
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
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

// The grid items
// Position relative to contain debugging marks
export const Item = styled.div`
  grid-area: ${props => (props.area ? props.area : null)};
  position: relative;
  z-index: -1;
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
  background: url('/static/reference/mondrian-broadway.jpg');
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
  margin-right: 16px;
  padding-right: 8px;
  border-right: 1px solid #c8c8c8;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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

export const Console = styled.div`
  width: 100%;
  min-height: 50px;
  max-height: 100px;
  overflow-y: scroll;
  font-size: 6px;
  background-color: black;
  color: green;
  margin-bottom: 8px;
`

export const ToolsPanel = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: white;
  font-size: 8px;
  padding: 8px;
  opacity: 1;
  z-index: 2;
  cursor: default;
`
