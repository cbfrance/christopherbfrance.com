import React from 'react'
import styled from 'styled-components'

import {
  GridPrimary,
  boxColor,
  LabelSecondary,
  EphemeralRectangle,
  ephemeralColor,
} from './styles'
import { convertToGrid, copyToClipboard } from './helpers'

const Buttons = styled.div`
  padding: 8px;
  cursor: default;
  position: fixed;
  top: 0;
  left: 0;
`

class DrawRectangle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstCoordinates: null,
      secondCoordinates: null,
      drawing: false,
      color: null,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  // MouseDown
  //
  handleMouseDown(event) {
    event.preventDefault()

    const coordiates = convertToGrid(
      this.props.position.y,
      this.props.position.x
    )

    this.setState({
      // Drawing a new rectangle
      drawing: true,
      // These props come from the ReactCursorPosition parent component
      firstCoordinates: coordiates,
      secondCoordinates: coordiates,
    })
  }

  // Move
  //
  handleMouseMove(event) {
    event.preventDefault()

    const secondCoordinates = convertToGrid(
      this.props.position.y,
      this.props.position.x
    )

    // Set the coordinates if drawing
    this.state.drawing && this.setState({ secondCoordinates })
  }

  // MouseUp
  //
  handleMouseUp(event) {
    event.preventDefault()

    // Store the new corner
    const secondCoordinates = convertToGrid(
      this.props.position.y,
      this.props.position.x
    )

    // Set the coordinates, reset drawing state
    this.setState({ secondCoordinates, drawing: false })

    // Read the down coodinates
    const { firstCoordinates } = this.state

    // Copy it
    copyToClipboard(
      `<Item area="${firstCoordinates}/${secondCoordinates}" color="${
        this.state.color
      }"/>`
    )
  }

  handleColorButton(color) {
    console.log(color)
    this.setState({ color })
  }

  render() {
    const boxDrawn = `${this.state.firstCoordinates}/${
      this.state.secondCoordinates
    }`

    return (
      <div>
        <Buttons>
          <button onClick={() => this.handleColorButton('blue')}>Blue</button>
          <button onClick={() => this.handleColorButton('red')}>Red</button>
          <button onClick={() => this.handleColorButton('yellow')}>
            Yellow
          </button>
          <button onClick={() => this.handleColorButton('grey')}>Grey</button>
          <button onClick={() => this.handleColorButton('lightgrey')}>
            Light grey
          </button>
        </Buttons>
        <GridPrimary
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
        >
          <EphemeralRectangle
            style={{
              backgroundColor: this.state.drawing
                ? 'transparent'
                : ephemeralColor,
              border: `1px solid ${
                this.state.drawing ? 'aqua' : 'transparent'
              }`,
              gridArea: boxDrawn,
              transition: 'background-color, 1s, border-color, 1s',
            }}
          >
            {<LabelSecondary>{boxDrawn}</LabelSecondary>}
          </EphemeralRectangle>
          {this.props.children}
        </GridPrimary>
      </div>
    )
  }
}

export default DrawRectangle
