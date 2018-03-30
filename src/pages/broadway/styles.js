import styled from 'styled-components'
import { topLeftCoordinates, bottomRightCoordinates } from './helpers'

export const gridUnit = 4
export const gridVisualColor = 'hsla(204, 80%, 72%, 0.25)'

export const LabelSecondary = styled.div`
  font-size: 5px;
  text-align: center;
`
export const ephemeralColor = 'hsla(204, 80%, 72%, 0.75)'

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
    --columns: 240;
    --baseline: ${gridUnit}px;
    --line-thickness: 1px;
    --visual-grid-color: ${gridVisualColor};
    --container-height: 60em;
    --container-width: 60em;
  }

  /* Helper variables */
  & {
    --repeating-width: calc(var(--container-width) / var(--columns));
    --repeating-height: calc(var(--container-width) / var(--columns));
    --background-columns: repeating-linear-gradient(
      to right,
      var(--visual-grid-color),
      transparent var(--line-thickness),
      transparent var(--repeating-width)
    );
    --background-baseline: repeating-linear-gradient(
      to bottom,
      var(--visual-grid-color),
      transparent var(--line-thickness),
      transparent var(--repeating-height)
    );
  }
`

// A reference layer with artwork for tracing
//
export const ReferenceArt = styled.div`
  background: url('/static/reference/mondrian-broadway.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: var(--container-width);
  height: var(--container-height);
  position: absolute;
  opacity: 0.3;
`

// A CSS overlay that mimics the grid rows and columns
//  using a repeating background image
//
export const GridVisual = styled.div`
  position: absolute;
  width: var(--container-width);
  height: var(--container-height);

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
    background-image: var(--background-columns), var(--background-baseline);
    background-size: 100% 100%;
    background-position: 0;
    z-index: 1000;
    pointer-events: none;
  }
`

// The grid container
// Immediate children are grid items ... this is used multiple times to achieve overlaying grids
export const GridPrimary = styled.div`
  opacity: 0.4;
  display: grid;
  grid-template-columns: repeat(var(--columns), ${gridUnit}px);
  grid-template-rows: repeat(var(--columns), ${gridUnit}px);
  width: var(--container-width);
  height: var(--container-height);
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

  /* Debugging crosshairs */ 
  &::before, &::after {
    display: block;
    position: absolute;
    font-size: 5px;
    color: aqua;
  }

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
