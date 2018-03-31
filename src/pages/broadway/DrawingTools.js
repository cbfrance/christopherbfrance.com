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

const artColors = ['blue', 'red', 'yellow', 'grey', 'lightgrey']

const Buttons = styled.div`
  cursor: default;
  display: flex;
  background-color: white;
  right: 0;
`

const Button = styled.a`
  padding: 4px;
  text-transform: uppercase;
  background-color: ${props => (props.active ? 'lightgrey' : 'transparent')};
  display: inline-block;
  margin: 0 8px 8px 0;
  border-radius: 2px;
  font-size: 8px;
  transition: background-color 0.2s;
  border: 1px solid lightgrey;
  &:hover {
    border: 1px solid grey;
  }
`

const ScratchPad = styled.div`
  border: 1px solid grey;
  width: 100%;
  min-height: 100px;
  font-size: 6px;

  background-color: black;
  color: green;
`

const Tools = styled.div`
  position: fixed;
  width: 400px;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 2;
  font-size: 8px;
  box-shadow: lightgrey 0 0 10px;
  padding: 8px;
`

class DrawingTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstCoordinates: null,
      secondCoordinates: null,
      drawing: false,
      color: '',
      scratchPadText: [],
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
    const addToScratchPad = string => {
      this.setState({ scratchPadText: [...this.state.scratchPadText, string] })
      console.log('pushed: ' + string)
    }

    // Store the new corner
    const secondCoordinates = convertToGrid(
      this.props.position.y,
      this.props.position.x
    )

    // Set the coordinates, reset drawing state
    this.setState({ secondCoordinates, drawing: false })

    // Read the down coodinates
    const { firstCoordinates } = this.state

    addToScratchPad(
      `<Item area="${firstCoordinates}/${secondCoordinates}" color="${
        this.state.color
      }"/>`
    )
  }

  handleColorButton(color) {
    console.log(color)
    this.setState({ color })
  }

  colorButtons = buttonsArray => {
    return (
      <div>
        {buttonsArray.map(color => (
          <Button
            active={this.state.color == color}
            onClick={() => this.handleColorButton(color)}
            key={color}
          >
            {color}
          </Button>
        ))}
      </div>
    )
  }

  render() {
    const boxDrawn = `${this.state.firstCoordinates}/${
      this.state.secondCoordinates
    }`

    const padContents = String(this.state.scratchPadText.join('\n'))

    return (
      <div>
        <Tools>
          <Buttons>{this.colorButtons(artColors)}</Buttons>
          <ScratchPad>{padContents}</ScratchPad>
          <button onClick={() => copyToClipboard(padContents)}>Copy</button>
        </Tools>
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

export default DrawingTools
