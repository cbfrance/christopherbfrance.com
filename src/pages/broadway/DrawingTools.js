import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import EphemeralRectangle from './EphemeralRectangle'

import { GridPrimary, boxColor, gridUnit, lineThickness, gridWidth, gridHeight, GridVisual, Row } from './styles'
import { convertToGrid, copyToClipboard } from './helpers'
import { HotKeys } from 'react-hotkeys'

const artColors = ['blue', 'red', 'yellow', 'grey', 'lightgrey']

const Art = styled.div`
  background: url('/static/reference/mondrian-broadway.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: ${gridWidth};
  height: ${gridHeight};
  position: absolute;
  opacity: ${props => (props.visibleArt ? '0.8' : '0')};
  transition: opacity 0.5s;
  z-index: 0;
  border: 3px solid green;
`
const ButtonGroup = styled.div`
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

const Button = styled.a`
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

const Console = styled.div`
  width: 100%;
  min-height: 50px;
  font-size: 6px;
  background-color: black;
  color: green;
  margin-bottom: 8px;
`

const ToolsPanel = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: white;
  font-size: 8px;
  box-shadow: lightgrey 0 0 10px;
  padding: 8px;
  opacity: 1;
  z-index: 3;
  cursor: default;
  border: 3px solid orange;
`

class DrawingTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstCoordinates: null,
      secondCoordinates: null,
      drawing: false,
      color: '',
      consoleText: [],
      visibleArt: true,
      visibleGrid: false,
      visibleMarks: false,
      visibleGridItems: false,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  // MouseDown
  //
  handleMouseDown(event) {
    event.preventDefault()

    const coordiates = convertToGrid(this.props.position.y, this.props.position.x)

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

    const secondCoordinates = convertToGrid(this.props.position.y, this.props.position.x)

    // Set the coordinates if drawing
    this.state.drawing && this.setState({ secondCoordinates })
  }

  // MouseUp
  //
  handleMouseUp(event) {
    event.preventDefault()
    const addToConsole = string => {
      this.setState({ consoleText: [...this.state.consoleText, string] })
      console.log('pushed: ' + string)
    }

    // Store the new corner
    const secondCoordinates = convertToGrid(this.props.position.y, this.props.position.x)

    // Set the coordinates, reset drawing state
    this.setState({ secondCoordinates, drawing: false })

    // Read the down coodinates
    const { firstCoordinates } = this.state

    addToConsole(`<Item area="${firstCoordinates}/${secondCoordinates}" color="${this.state.color}"/>`)
  }

  handleColorButton(color) {
    console.log(color)
    this.setState({ color })
  }

  colorButtons = buttonsArray => {
    return (
      <div>
        {buttonsArray.map(color => (
          <Button active={this.state.color == color} onClick={() => this.handleColorButton(color)} key={color}>
            {color}
          </Button>
        ))}
      </div>
    )
  }

  render() {
    const handleUndo = event => {
      const currentConsoleText = this.state.consoleText
      const newConsoleText = currentConsoleText.slice(0, -1)
      this.setState({ consoleText: newConsoleText })
    }

    const handleCopy = event => copyToClipboard(String(this.state.consoleText.join('\n')))

    const artToggle = event => (this.state.visibleArt ? this.setState({ visibleArt: false }) : this.setState({ visibleArt: true }))

    const gridToggle = event => (this.state.visibleGrid ? this.setState({ visibleGrid: false }) : this.setState({ visibleGrid: true }))

    const marksToggle = event => (this.state.visibleMarks ? this.setState({ visibleMarks: false }) : this.setState({ visibleMarks: true }))

    const gridItemsToggle = event =>
      this.state.visibleGridItems ? this.setState({ visibleGridItems: false }) : this.setState({ visibleGridItems: true })

    const hotkeyHandlers = {
      c: handleCopy,
      a: artToggle,
      g: gridToggle,
      u: handleUndo,
      m: marksToggle,
      i: gridItemsToggle,
    }

    const clearConsole = () => {
      this.setState({ consoleText: [] })
      console.log('cleared scratch pad')
    }

    // Autofocus to enable global hotkeys
    // See: https://github.com/greena13/react-hotkeys/issues/25
    const autofocus = el => el && ReactDOM.findDOMNode(el).focus()

    return (
      <HotKeys ref={autofocus} handlers={hotkeyHandlers}>
        <GridVisual visibleGrid={this.state.visibleGrid} />
        <Art visibleArt={this.state.visibleArt} />

        <ToolsPanel>
          <Console>{String(this.state.consoleText.join('\n'))}</Console>
          <Row>
            <ButtonGroup>
              <Button onClick={() => handleCopy()}>Copy (c)</Button>
              <Button onClick={() => handleUndo()}>Undo (u)</Button>
              <Button onClick={() => clearConsole()}>Clear</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={() => artToggle()}>Art (a)</Button>
              <Button onClick={() => gridToggle()}>Grid (g)</Button>
              <Button onClick={() => marksToggle()}>Marks (m)</Button>
              <Button onClick={() => gridItemsToggle()}>Items (i)</Button>
            </ButtonGroup>
            <ButtonGroup>{this.colorButtons(artColors)}</ButtonGroup>
          </Row>
        </ToolsPanel>

        <GridPrimary
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          visibleMarks={this.state.visibleMarks}
          visibleGridItems={this.state.visibleGridItems}
        >
          <EphemeralRectangle
            firstCoordinates={this.state.firstCoordinates}
            secondCoordinates={this.state.secondCoordinates}
            drawing={this.state.drawing}
          />
          {this.props.children}
        </GridPrimary>
      </HotKeys>
    )
  }
}

export default DrawingTools
