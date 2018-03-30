import React from 'react'
import { ParentGrid, Variables } from './styles'
import { convertToGrid, copyToClipboard } from './helpers'

class DrawRectangle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      downCoordinates: '1/1',
      upCoordinates: '1/1',
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  handleMouseDown(event) {
    event.preventDefault()
    // Reset when drawing a new rectangle
    this.setState({ upCoordinates: '1 / 1' })
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

    const { downCoordinates } = this.state

    copyToClipboard(`${downCoordinates}/${upCoordinates}`)
  }

  render() {
    const boxDrawn = `${this.state.downCoordinates}/${this.state.upCoordinates}`
    const boxColor = 'hsla(204, 80%, 72%, 0.75)'

    return (
      <Variables>
        <ParentGrid>
          <div
            style={{
              zIndex: 4,
              background: boxColor,
              gridArea: boxDrawn,
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
        </ParentGrid>
      </Variables>
    )
  }
}

export default DrawRectangle
