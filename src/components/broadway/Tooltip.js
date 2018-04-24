import React from 'react'
import { convertToGrid } from './helpers'
import styled from 'styled-components'

const Label = styled.div`
    display: ${props => (props.display ? 'none' : 'block')};
    position: absolute;
    background-color: black;
    color: white;
    border-radius: 2px;
    padding: 0 2px;
    font-size: 8px;
    transition: display 0.4s;
    z-index: 4;
`

const labelOffset = 2

// Tooltip is the tooltip that shows the current x/y position, converted to grid columns
const Tooltip = props => {
    // A parent component, ReactCursorPosition, passes in these props:
    // For more options see
    // https://github.com/ethanselzer/react-cursor-position
    const { position: { x = 0, y = 0 } = {}, isPositionOutside = false } = props

    return (
        <Label display={isPositionOutside} style={{ top: y + labelOffset, left: x + labelOffset }}>
            {convertToGrid(y, x)}
        </Label>
    )
}

Tooltip.defaultProps = {
    shouldShowIsActive: true,
}

export default Tooltip
