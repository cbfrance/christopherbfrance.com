import React from 'react'
import {
  ephemeralColor,
  gridUnit,
  lineThickness,
  gridWidth,
  gridHeight,
} from './styles'
import styled from 'styled-components'

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
const Overlay = styled.div`
  position: absolute;
  width: ${gridWidth};
  height: ${gridHeight};
  opacity: ${props => (props.visible ? '1' : '0')};
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

class GridVisual extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = event => {
    // Press g to toggle the grid
    if (event.which == 71) {
      this.state.visible
        ? this.setState({ visible: false })
        : this.setState({ visible: true })
    }
  }

  render() {
    return <Overlay visible={this.state.visible} />
  }
}

export default GridVisual
