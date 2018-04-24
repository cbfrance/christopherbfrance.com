import React from 'react'
import styled from 'styled-components'
import EphemeralRectangle from './EphemeralRectangle'
import { gridItems } from './gridItems.js'
import { GridPrimary, Item, colors, TopLeftMark, BottomRightMark } from './styles'
import { topLeftCoordinates, bottomRightCoordinates } from './helpers'

class Grid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const GridItemsAsHTML = JSON.parse(gridItems).map((item, index) => (
            <Item
                key={index}
                style={{
                    position: 'relative',
                    gridArea: item.area,
                    backgroundColor: colors[item.color],
                }}
            >
                {this.props.visibleMarks && [
                    <TopLeftMark key={index + 'a'}>{topLeftCoordinates(item.area)}</TopLeftMark>,
                    <BottomRightMark key={index + 'b'}>{bottomRightCoordinates(item.area)}</BottomRightMark>,
                ]}
            </Item>
        ))

        return (
            <GridPrimary
                onMouseDown={event => this.props.handleMouseDown(event, this.props.position.x, this.props.position.y)}
                onMouseUp={event => this.props.handleMouseUp(event, this.props.position.x, this.props.position.y)}
                onMouseMove={event => this.props.handleMouseMove(event, this.props.position.x, this.props.position.y)}
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

export default Grid
