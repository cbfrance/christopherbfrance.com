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
      downCoordinates: null,
      upCoordinates: null,
      drawing: false,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  handleMouseDown(event) {
    event.preventDefault()

    this.setState({
      // Drawing a new rectangle
      drawing: true,
      // These props come from the ReactCursorPosition parent component
      downCoordinates: convertToGrid(
        this.props.position.y,
        this.props.position.x
      ),
    })
  }

  handleMouseUp(event) {
    event.preventDefault()

    // Store the new corner
    const upCoordinates = convertToGrid(
      this.props.position.y,
      this.props.position.x
    )

    // Set the coordinates, reset drawing state
    this.setState({ upCoordinates, drawing: false })

    // Read the down coodinates
    const { downCoordinates } = this.state

    // Copy it
    copyToClipboard(`${downCoordinates}/${upCoordinates}`)
  }

  render() {
    const boxDrawn = `${this.state.downCoordinates}/${this.state.upCoordinates}`

    return (
      <GridPrimary
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <EphemeralRectangle
          style={{
            backgroundColor: this.state.drawing ? 'black' : ephemeralColor,
            gridArea: boxDrawn,
          }}
        >
          {<LabelSecondary>{boxDrawn} copied!</LabelSecondary>}
        </EphemeralRectangle>
        {this.props.children}
      </GridPrimary>
    )
  }
}

export default DrawRectangle
