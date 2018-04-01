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
    <Item key={index} style={{ position: 'relative', gridArea: item.area, backgroundColor: item.color }} />
))

const MondrianBroadway = () => (
    <div>
        <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
        <Container>
            <ReactCursorPosition>
                <Tooltip />
                <DrawingTools>{gridItemsAsHTML}</DrawingTools>
            </ReactCursorPosition>
        </Container>
    </div>
)

export default MondrianBroadway
