import React from 'react'
import { GridPrimary, Variables } from './styles'
import { convertToGrid, copyToClipboard } from './helpers'

class DrawRectangle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      downCoordinates: '1/1',
      upCoordinates: '1/1',
      visible: false,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  handleMouseDown(event) {
    event.preventDefault()
    // Reset when drawing a new rectangle
    this.setState({ visible: false })
    this.setState({
      downCoordinates: convertToGrid(
        this.props.position.y,
        this.props.position.x
      ),
    })
  }

  handleMouseUp(event) {
    event.preventDefault()
    const upCoordinates = convertToGrid(
      this.props.position.y,
      this.props.position.x
    )

    this.setState({ upCoordinates })
    this.setState({ visible: true })

    const { downCoordinates } = this.state

    copyToClipboard(`${downCoordinates}/${upCoordinates}`)
  }

  render() {
    const boxDrawn = `${this.state.downCoordinates}/${this.state.upCoordinates}`
    const boxColor = 'hsla(204, 80%, 72%, 0.75)'

    return (
      <Variables>
        <GridPrimary>
          <div
            style={{
              zIndex: 4,
              background: boxColor,
              gridArea: boxDrawn,
              display: this.state.visible ? 'block' : 'none',
            }}
          >
            {/* TODO: show this when after mouseUp but hide on mouseDown */}
            {/* <span style={{ fontSize: '8px' }}>{boxDrawn}</span> */}
          </div>
          <div
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          >
            {this.props.children}
          </div>
        </GridPrimary>
      </Variables>
    )
  }
}

export default DrawRectangle
