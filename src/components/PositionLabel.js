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

    return (
        <div style={{ display: 'block', position: 'absolute', top: y, left: x, background: 'black', color: 'white' }}className={props.className}>
            {/* We use a 4px grid, so divide by 4 (it's .25ems where 1em = 16px)  ... and Add one because the grid is 1-indexed!*/}
            {`${Math.floor(y / 4 + 1)}`}/{`${Math.floor(x / 4 + 1)}`}
        </div>
    );

};

PositionLabel.defaultProps = {
    shouldShowIsActive: true
};

export default PositionLabel;
