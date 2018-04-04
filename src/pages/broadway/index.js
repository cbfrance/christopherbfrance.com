import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled, { injectGlobal } from 'styled-components'
import DrawingTools from './DrawingTools'
import Tooltip from './Tooltip'
import { colors, Title, Container, Item } from './styles'
import { topLeftCoordinates, bottomRightCoordinates } from './helpers'
import { transparentize } from 'polished'
import { gridItems } from './gridItems.js'
injectGlobal`
  * {
    outline: none;
    box-sizing: border-box;
  }
`

const gridItemsAsHTML = JSON.parse(gridItems).map((item, index) => (
    <Item
        key={index}
        style={{
            position: 'relative',
            gridArea: item.area,
            backgroundColor: item.color,
        }}
    >
        <div
            style={{
                position: 'absolute',
                fontSize: 5,
                top: 0,
                left: 0,
                width: 4,
                height: 4,
                borderTop: '1px solid aqua',
                borderLeft: '1px solid aqua',
            }}
        >
            {topLeftCoordinates(item.area)}
        </div>
        <div
            style={{
                position: 'absolute',
                fontSize: 5,
                bottom: 0,
                right: 0,
                width: 4,
                height: 4,
                borderBottom: '1px solid aqua',
                borderRight: '1px solid aqua',
            }}
        >
            {bottomRightCoordinates(item.area)}
        </div>
    </Item>
))

const MondrianBroadway = () => (
    <div>
        <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
        <Container>
            <ReactCursorPosition>
                <Tooltip />
                <DrawingTools style={{ position: 'absolute', top: '100px' }}>{gridItemsAsHTML}</DrawingTools>
            </ReactCursorPosition>
        </Container>
    </div>
)

export default MondrianBroadway
