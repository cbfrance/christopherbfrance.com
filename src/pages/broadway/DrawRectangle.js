import React from 'react'
import {
  GridPrimary,
  boxColor,
  LabelSecondary,
  EphemeralRectangle,
  ephemeralColor,
} from './styles'
import { convertToGrid, copyToClipboard } from './helpers'

class DrawRectangle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstCoordinates: null,
      secondCoordinates: null,
      drawing: false,
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
    copyToClipboard(`${firstCoordinates}/${secondCoordinates}`)
  }

  render() {
    const boxDrawn = `${this.state.firstCoordinates}/${
      this.state.secondCoordinates
    }`

    return (
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
            border: `1px solid ${this.state.drawing ? 'aqua' : 'transparent'}`,
            gridArea: boxDrawn,
            transition: 'background-color, 1s, border-color, 1s',
          }}
        >
          {<LabelSecondary>{boxDrawn}</LabelSecondary>}
        </EphemeralRectangle>
        {this.props.children}
      </GridPrimary>
    )
  }
}

export default DrawRectangle
