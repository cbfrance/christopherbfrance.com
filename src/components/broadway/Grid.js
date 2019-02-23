import PropTypes from 'prop-types'
import React from 'react'
import EphemeralRectangle from './EphemeralRectangle'
import { gridItems } from './gridItems'
import {
  GridPrimary,
  Item,
  colors,
  TopLeftMark,
  BottomRightMark
} from './styles'
import { topLeftCoordinates, bottomRightCoordinates } from './helpers'

// var shortid = require('shortid')

class Grid extends React.Component {
  render() {
    const GridItemsAsHTML = JSON.parse(gridItems).map((item, index) =>
      <Item
        // TODO: shortid preferred over index as key,
        // but it seems bad for performance 2018-5-4
        // key={shortid.generate()}
        key={index}
        style={{
          position: 'relative',
          gridArea: item.area,
          backgroundColor: colors[item.color]
        }}
      >
        {this.props.visibleMarks && [
          <TopLeftMark key={`${index}a`}>
            {topLeftCoordinates(item.area)}
          </TopLeftMark>,
          <BottomRightMark key={`${index}b`}>
            {bottomRightCoordinates(item.area)}
          </BottomRightMark>
        ]}
      </Item>
    )

    return (
      <GridPrimary
        onMouseDown={event =>
          this.props.handleMouseDown(
            event,
            this.props.position.x,
            this.props.position.y
          )}
        onMouseUp={event =>
          this.props.handleMouseUp(
            event,
            this.props.position.x,
            this.props.position.y
          )}
        onMouseMove={event =>
          this.props.handleMouseMove(
            event,
            this.props.position.x,
            this.props.position.y
          )}
        visibleMarks={this.props.visibleMarks}
        visibleGridItems={this.props.visibleGridItems}
        mixBlendMode={this.props.mixBlendMode}
      >
        <EphemeralRectangle
          firstCoordinates={this.props.firstCoordinates}
          secondCoordinates={this.props.secondCoordinates}
          drawing={this.props.drawing}
        />
        {GridItemsAsHTML}
      </GridPrimary>
    )
  }
}

Grid.propTypes = {
  handleMouseMove: PropTypes.func,
  handleMouseDown: PropTypes.func,
  handleMouseUp: PropTypes.func,
  onMouseMove: PropTypes.func,
  firstCoordinates: PropTypes.string,
  secondCoordinates: PropTypes.string,
  visibleMarks: PropTypes.bool,
  drawing: PropTypes.bool,
  visibleGridItems: PropTypes.bool,
  mixBlendMode: PropTypes.string,
};


export default Grid
