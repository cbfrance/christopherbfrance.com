import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled from 'styled-components'
import Tooltip from 'components/Broadway/Tooltip'
import ReactDOM from 'react-dom'
import SelectMixBlendMode from 'components/Broadway/SelectMixBlendMode'
import { convertToGrid, copyToClipboard } from 'components/Broadway/helpers'
import { HotKeys } from 'react-hotkeys'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { gridItems } from 'components/Broadway/gridItems'
import Grid from 'components/Broadway/Grid'
import {
  boxColor,
  gridUnit,
  lineThickness,
  gridWidth,
  gridHeight,
  GridVisual,
  Row,
  Art,
  ButtonGroup,
  Button,
  Console,
  ToolsPanel,
  Title,
  Container,
  OuterContainer,
  Main,
  Header,
  SidebarRight,
  SidebarLeft,
  NativeButton,
} from 'components/Broadway/styles'

const artColorButtonLabels = ['blue', 'red', 'yellow', 'grey', 'lightgrey']

class Broadway extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstCoordinates: null,
      secondCoordinates: null,
      drawing: false,
      color: '',
      consoleText: null,
      visibleArt: true,
      visibleGrid: false,
      visibleMarks: false,
      visibleGridItems: false,
      mixBlendMode: 'multiply',
    }

    // Store the gridItems in the browser
    localStorage.setItem('gridData', gridItems)
  }

  // MouseDown
  //
  handleMouseDown = (event, x, y) => {
    event.preventDefault()
    const coordiates = convertToGrid(y, x)
    this.setState({
      drawing: true,
      firstCoordinates: coordiates,
      secondCoordinates: coordiates,
    })
  }

  // Move
  //
  handleMouseMove = (event, x, y) => {
    event.preventDefault()
    const secondCoordinates = convertToGrid(y, x)
    this.state.drawing && this.setState({ secondCoordinates })
  }

  // MouseUp
  //
  handleMouseUp = (event, x, y) => {
    event.preventDefault()
    const addToConsole = string => {
      this.setState({ consoleText: [...this.state.consoleText, string] })
    }
    const secondCoordinates = convertToGrid(y, x)
    this.setState({ secondCoordinates, drawing: false })
    const { firstCoordinates } = this.state

    addToConsole(
      `{"area": "${firstCoordinates}/${secondCoordinates}", "color":"${
        this.state.color
      }"},`
    )
  }

  colorButtons = buttonsArray => (
    <div>
      {buttonsArray.map(color => (
        <NativeButton
          active={this.state.color == color}
          onClick={() => this.setState({ color })}
          key={color}
        >
          {color}
        </NativeButton>
      ))}
    </div>
  )

  handleUndo = event => {
    const currentConsoleText = this.state.consoleText
    const newConsoleText = currentConsoleText.slice(0, -1)
    this.setState({ consoleText: newConsoleText })
  }

  ephemeralRectangleClear = event => {
    this.handleUndo()
    this.setState({ firstCoordinates: null, secondCoordinates: null })
  }

  handleCopy = event =>
    copyToClipboard(String(this.state.consoleText.join('\n')))

  artToggle = event =>
    this.state.visibleArt
      ? this.setState({ visibleArt: false })
      : this.setState({ visibleArt: true })

  gridToggle = event =>
    this.state.visibleGrid
      ? this.setState({ visibleGrid: false })
      : this.setState({ visibleGrid: true })

  marksToggle = event =>
    this.state.visibleMarks
      ? this.setState({ visibleMarks: false })
      : this.setState({ visibleMarks: true })

  gridItemsToggle = event =>
    this.state.visibleGridItems
      ? this.setState({ visibleGridItems: false })
      : this.setState({ visibleGridItems: true })

  mixBlendModeChange = event => {
    this.setState({ mixBlendMode: event.target.value })
    event.preventDefault()
    console.log(event.target.value)
  }

  clearConsole = () => {
    this.setState({ consoleText: [] })
    localStorage.clear()
  }

  // Autofocus to enable global hotkeys
  // See: https://github.com/greena13/react-hotkeys/issues/25
  autofocus = el => el && ReactDOM.findDOMNode(el).focus()

  render() {
    const hotkeyHandlers = {
      c: this.handleCopy,
      a: this.artToggle,
      g: this.gridToggle,
      u: this.handleUndo,
      m: this.marksToggle,
      i: this.gridItemsToggle,
      esc: this.ephemeralRectangleClear,
    }

    return (
      <div>
        <HotKeys ref={this.autofocus} handlers={hotkeyHandlers}>
          <OuterContainer>
            <Header>
              <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
            </Header>
            <Main>
              <Container>
                <ReactCursorPosition>
                  <Tooltip />
                  <GridVisual visibleGrid={this.state.visibleGrid} />
                  <Art visibleArt={this.state.visibleArt} />
                  <Grid
                    handleMouseDown={this.handleMouseDown}
                    handleMouseUp={this.handleMouseUp}
                    handleMouseMove={this.handleMouseMove}
                    visibleMarks={this.state.visibleMarks}
                    visibleGridItems={this.state.visibleGridItems}
                    mixBlendMode={this.state.mixBlendMode}
                    firstCoordinates={this.state.firstCoordinates}
                    secondCoordinates={this.state.secondCoordinates}
                    drawing={this.state.drawing}
                  />
                </ReactCursorPosition>
              </Container>
            </Main>
            <SidebarRight>
              <Console>
                <ButtonGroup>
                  <Row>
                    <NativeButton onClick={() => this.handleCopy()}>
                      Copy (c)
                    </NativeButton>
                    <NativeButton onClick={() => this.handleUndo()}>
                      Undo (u)
                    </NativeButton>
                    <NativeButton onClick={() => this.clearConsole()}>
                      Clear
                    </NativeButton>
                  </Row>
                </ButtonGroup>
                <SyntaxHighlighter language="json" style={solarizedlight}>
                  {localStorage.getItem('gridData')}
                </SyntaxHighlighter>
              </Console>
            </SidebarRight>
            <SidebarLeft>
              <ToolsPanel>
                <ButtonGroup>
                  <h3>Toggle view</h3>
                  <NativeButton
                    active={this.state.visibleArt}
                    onClick={() => this.artToggle()}
                  >
                    Art (a)
                  </NativeButton>
                  <NativeButton
                    active={this.state.visibleGrid}
                    onClick={() => this.gridToggle()}
                  >
                    Grid (g)
                  </NativeButton>
                  <NativeButton
                    active={this.state.visibleMarks}
                    onClick={() => this.marksToggle()}
                  >
                    Marks (m)
                  </NativeButton>
                  <NativeButton
                    active={this.state.visibleGridItems}
                    onClick={() => this.gridItemsToggle()}
                  >
                    Items (i)
                  </NativeButton>
                </ButtonGroup>

                <ButtonGroup>
                  <h3>Set grid-item color</h3>
                  {this.colorButtons(artColorButtonLabels)}
                </ButtonGroup>

                <h3>Set mix-blend mode</h3>
                <SelectMixBlendMode
                  handler={this.mixBlendModeChange}
                  mode={this.state.mixBlendMode}
                />
              </ToolsPanel>
            </SidebarLeft>
          </OuterContainer>
        </HotKeys>
      </div>
    )
  }
}

export default Broadway
