import React from 'react'
import { gridWidth, gridHeight } from './styles'
import styled from 'styled-components'

// A reference layer with artwork for tracing
//
const Art = styled.div`
  background: url('/static/reference/mondrian-broadway.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: ${gridWidth};
  height: ${gridHeight};
  position: absolute;
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: opacity 0.5s;
`

class ReferenceArt extends React.Component {
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
    if (event.key == 'a') {
      this.state.visible
        ? this.setState({ visible: false })
        : this.setState({ visible: true })
    }
  }

  render() {
    return <Art visible={this.state.visible} />
  }
}

export default ReferenceArt
