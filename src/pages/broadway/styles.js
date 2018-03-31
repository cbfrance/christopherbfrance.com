import styled from 'styled-components'
import { topLeftCoordinates, bottomRightCoordinates } from './helpers'

export const lineThickness = '1px'
export const gridUnit = '4px'
export const gridWidth = '960px'
export const gridHeight = '960px'
export const gridColumns = '240'
export const gridVisualColor = 'hsla(204, 80%, 72%, 0.25)'
export const ephemeralColor = 'hsla(204, 80%, 72%, 0.75)'

export const LabelSecondary = styled.div`
  font-size: 5px;
  text-align: center;
`

export const EphemeralRectangle = styled.div`
  z-index: 4;
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

  /* Settings */
  & {
    --columns: ;
    --baseline: ${gridUnit};
    --line-thickness: ${lineThickness};
    --visual-grid-color: ${gridVisualColor};
    --container-height: ${gridWidth};
    --container-width: ${gridHeight};22
  }
`

// The grid container
// Immediate children are grid items ... this is used multiple times to achieve overlaying grids
export const GridPrimary = styled.div`
  opacity: 0.4;
  display: grid;
  grid-template-columns: repeat(${gridColumns}, ${gridUnit});
  grid-template-rows: repeat(${gridColumns}, ${gridUnit});
  width: ${gridWidth};
  height: ${gridColumns};

  & > div {
    /* Toggleable grid items */
    transition: opacity 0.6s;
    visibility: ${props => (props.visibleGridItems ? 'visible' : 'hidden')};

    /* Toggleable ebugging marks on grid items */
    &::before,
    &::after {
      display: block;
      visibility: visible;
      position: absolute;
      font-size: 5px;
      color: aqua;
      transition: opacity 0.6s;
      opacity: ${props => (props.visibleMarks ? '1' : '0')};
    }
  }
`

// The grid items
// The area prop is read to create debugging crosshairs
export const Item = styled.div`
  grid-area: ${props => (props.area ? props.area : null)};
  position: relative;

  /* Colors */
  ${props => (props.yellow ? 'background-color: orange;' : '')};
  ${props => (props.blue ? 'background-color: blue;' : '')};
  ${props => (props.red ? 'background-color: red;' : '')};
  ${props => (props.grey ? 'background-color: grey;' : '')};

  /* Tweaks: Not all the art is grid aligned */
  ${props => (props.nudgeRight ? 'margin-right: -2px;' : '')};
  ${props => (props.nudgeLeft ? 'margin-left: -2px;' : '')};
  ${props => (props.nudgeUp ? 'margin-top: -2px;' : '')};
  ${props => (props.nudgeDown ? 'margin-bottom: -2px;' : '')};

  &::before {
    content: '${props =>
      props.area ? topLeftCoordinates(props.area) : 'null'}';
    border-top: ${props => (props.nudgeUp ? '2px' : '1px')} solid aqua;
    border-left: ${props => (props.nudgeLeft ? '2px' : '1px')} solid aqua;
  }

  &::after {
    content: '${props =>
      props.area ? bottomRightCoordinates(props.area) : 'null'}';
    border-bottom: ${props => (props.nudgeDown ? '2px' : '1px')} solid aqua;
    border-right: ${props => (props.nudgeRight ? '2px' : '1px')} solid aqua;
    bottom: 0;
    right: 0;
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
  transition: opacity .6s;

  background-image: 
    repeating-linear-gradient(${columnGradient}),
    repeating-linear-gradient(${rowGradient});

  background-size: 100% 100%;
  background-position: 0;
  z-index: 1000;
  pointer-events: none;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    min-height: 100%;
    content: '';
`
