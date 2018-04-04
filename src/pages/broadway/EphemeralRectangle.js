import React from 'react'
import { ephemeralColor, LabelSecondary } from './styles'

// EphemeralRectangle appears when you draw on top of the grid ....
// It has "marks"

const EphemeralRectangle = props => {
    const boxDrawn = `${props.firstCoordinates}/${props.secondCoordinates}`
    return (
        <div
            style={{
                position: 'relative',
                visibility: 'visible',
                backgroundColor: props.drawing ? 'transparent' : ephemeralColor,
                border: `1px solid ${props.drawing ? 'aqua' : 'transparent'}`,
                gridArea: boxDrawn,
                transition: 'background-color, 1s, border-color, 1s',
            }}
        >
            <LabelSecondary>{boxDrawn}</LabelSecondary>
        </div>
    )
}

export default EphemeralRectangle
