import React from 'react';
import { convertToGrid } from './helpers';

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

    const style = {
        display: 'block',
        position: 'absolute',
        top: y - 2,
        left: x + 2,
        background: 'black',
        color: 'white',
        borderRadius: 2,
        padding: '0 2px',
        fontSize: 8,
    }

    return (
        <div style={style} className={props.className}>
            {convertToGrid(y, x)}
        </div>
    );

};

PositionLabel.defaultProps = {
    shouldShowIsActive: true
};

export default PositionLabel;
