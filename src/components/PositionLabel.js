import React from 'react';
import { convertToGrid } from './helpers';
import styled from 'styled-components';

const Label = styled.div`
    display: ${props => props.display ? 'none' : 'block'};
    position: absolute;
    background-color: black;
    color: white;
    border-radius: 2px;
    padding: 0 2px;
    font-size: 8px;
    transition: display 0.4s;
`;

const labelOffset = 2;

const PositionLabel = props => {

    // A parent component passes in these props: 
    // For more options see
    // https://github.com/ethanselzer/react-cursor-position
    const {
        position: {
            x = 0,
            y = 0
        } = {},
        isPositionOutside = false
    } = props;

    return (
        <Label display={isPositionOutside} style={{ top: y + labelOffset, left: x + labelOffset }}>
            {convertToGrid(y, x)}
        </Label>
    );

};

PositionLabel.defaultProps = {
    shouldShowIsActive: true
};

export default PositionLabel;
