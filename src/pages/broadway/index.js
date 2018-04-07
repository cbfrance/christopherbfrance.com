import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled, { injectGlobal } from 'styled-components'
import DrawingTools from './DrawingTools'
import Tooltip from './Tooltip'
import ReactDOM from 'react-dom'
import SelectMixBlendMode from './SelectMixBlendMode'
import { convertToGrid, copyToClipboard } from './helpers'
import { HotKeys } from 'react-hotkeys'
import Grid from './Grid'
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
} from './styles'

injectGlobal`
  * {
    outline: none;
    box-sizing: border-box;
  }
`

const artColorButtonLabels = ['blue', 'red', 'yellow', 'grey', 'lightgrey']

class MondrianBroadway extends React.Component {
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
            mixBlendMode: 'multiply',
        }
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    // MouseDown
    //
    handleMouseDown(event, x, y) {
        event.preventDefault()
        const coordiates = convertToGrid(y, x)
        this.setState({
            drawing: true,
            // These props come from the ReactCursorPosition parent component
            firstCoordinates: coordiates,
            secondCoordinates: coordiates,
        })
    }

    // Move
    //
    handleMouseMove(event, x, y) {
        event.preventDefault()
        const secondCoordinates = convertToGrid(y, x)
        this.state.drawing && this.setState({ secondCoordinates })
    }

    // MouseUp
    //
    handleMouseUp(event, x, y) {
        event.preventDefault()
        const addToConsole = string => {
            this.setState({ consoleText: [...this.state.consoleText, string] })
        }
        const secondCoordinates = convertToGrid(y, x)
        this.setState({ secondCoordinates, drawing: false })
        const { firstCoordinates } = this.state
        addToConsole(`<Item area="${firstCoordinates}/${secondCoordinates}" color="${this.state.color}"/>`)
    }

    handleColorButton(color) {
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

        const mixBlendModeChange = event => {
            this.setState({ mixBlendMode: event.target.value })
            event.preventDefault()
            console.log(event.target.value)
        }

        const ephemeralRectangleClear = event => {
            handleUndo()
            this.setState({ firstCoordinates: null, secondCoordinates: null })
        }

        const clearConsole = () => {
            this.setState({ consoleText: [] })
        }

        const hotkeyHandlers = {
            c: handleCopy,
            a: artToggle,
            g: gridToggle,
            u: handleUndo,
            m: marksToggle,
            i: gridItemsToggle,
            esc: ephemeralRectangleClear,
        }

        // Autofocus to enable global hotkeys
        // See: https://github.com/greena13/react-hotkeys/issues/25
        const autofocus = el => el && ReactDOM.findDOMNode(el).focus()

        return (
            <div>
                <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
                <Container>
                    <HotKeys ref={autofocus} handlers={hotkeyHandlers}>
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

                        <ToolsPanel>
                            <Console>{String(this.state.consoleText.join('\n'))}</Console>
                            <Row>
                                <ButtonGroup>
                                    <Button onClick={() => handleCopy()}>Copy (c)</Button>
                                    <Button onClick={() => handleUndo()}>Undo (u)</Button>
                                    <Button onClick={() => clearConsole()}>Clear</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button active={this.state.visibleArt} onClick={() => artToggle()}>
                                        Art (a)
                                    </Button>
                                    <Button active={this.state.visibleGrid} onClick={() => gridToggle()}>
                                        Grid (g)
                                    </Button>
                                    <Button active={this.state.visibleMarks} onClick={() => marksToggle()}>
                                        Marks (m)
                                    </Button>
                                    <Button active={this.state.visibleGridItems} onClick={() => gridItemsToggle()}>
                                        Items (i)
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>{this.colorButtons(artColorButtonLabels)}</ButtonGroup>
                            </Row>

                            <SelectMixBlendMode handler={mixBlendModeChange} mode={this.state.mixBlendMode} />
                        </ToolsPanel>
                    </HotKeys>
                </Container>
            </div>
        )
    }
}

export default MondrianBroadway
