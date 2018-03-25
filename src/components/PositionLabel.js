import React from 'react';

const PositionLabel = props => {

    const {
        detectedEnvironment: {
            isMouseDetected = false,
            isTouchDetected = false
        } = {},
        elementDimensions: {
            width = 0,
            height = 0
        } = {},
        position: {
            x = 0,
            y = 0
        } = {},
        isActive = false,
        isPositionOutside = false
    } = props;

    const gridUnit = 4;
    const gridOffset = 1;

    const style = { 
        display: 'block',
        position: 'absolute',
        top: y - 2,
        left: x + 2,
        background: 'black',
        color: 'white',
        borderRadius: 2,
        padding: '0 2px',
        fontSize: 8
    }

    return (
        <div style={style} className={props.className}>
            {/* We use a 4px grid, so divide by 4 (it's .25ems where 1em = 16px)  ... and Add one because the grid is 1-indexed!*/}
            {`${Math.floor(y / gridUnit + gridOffset)}`}/{`${Math.floor(x / gridUnit + gridOffset)}`}
        </div>
    );

};

PositionLabel.defaultProps = {
    shouldShowIsActive: true
};

export default PositionLabel;
