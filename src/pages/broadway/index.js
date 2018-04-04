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

const Mark = styled.div`
    position: absolute;
    font-size: 5px;
    width: 4px;
    height: 4px;
`

const TopLeftMark = styled(Mark)`
    top: 0;
    left: 0;
    border-top: 1px solid aqua;
    border-left: 1px solid aqua;
`

const BottomRightMark = styled(Mark)`
    bottom: 0;
    right: 0;
    border-bottom: 1px solid aqua;
    border-right: 1px solid aqua;
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
        <TopLeftMark>{topLeftCoordinates(item.area)}</TopLeftMark>
        <BottomRightMark>{bottomRightCoordinates(item.area)}</BottomRightMark>
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
