import React from 'react'
import {
  ephemeralColor,
  gridUnit,
  lineThickness,
  gridWidth,
  gridHeight,
} from './styles'
import styled from 'styled-components'

// A CSS overlay that mimics the grid rows and columns
//  using a repeating background image
//
const Overlay = styled.div`
  position: absolute;
  width: ${gridWidth};
  height: ${gridHeight};
  display: ${props => (props.visible ? 'block' : 'none')}

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

  & {
    background-image: repeating-linear-gradient(
      to right,
      ${ephemeralColor},
      transparent ${lineThickness},
      transparent ${gridUnit}
    ), repeating-linear-gradient(
      to bottom,
      ${ephemeralColor},
      transparent ${lineThickness},
      transparent ${gridUnit}
    );

    background-size: 100% 100%;
    background-position: 0;
    z-index: 1000;
    pointer-events: none;
  }
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
      this.setState({ visible: true })
    }
  }

  render() {
    return <Overlay visible={this.state.visible} />
  }
}

export default GridVisual
