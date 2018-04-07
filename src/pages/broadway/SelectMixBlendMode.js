import React from 'react'

class SelectMixBlendMode extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select value={this.props.mode} onChange={this.props.handler}>
                <option value="difference">Difference</option>
                <option value="normal">Normal</option>
                <option value="multiply">Multiply</option>
                <option value="screen">Screen</option>
                <option value="overlay">Overlay</option>
                <option value="darken">Darken</option>
                <option value="lighten">Lighten</option>
                <option value="color-dodge">Color-dodge</option>
                <option value="color-burn">Color-burn</option>
                <option value="hard-light">Hard-light</option>
                <option value="soft-light">Soft-light</option>
                <option value="difference">Difference</option>
                <option value="exclusion">Exclusion</option>
                <option value="hue">Hue</option>
                <option value="saturation">Saturation</option>
                <option value="color">Color</option>
                <option value="luminosity">Luminosity</option>
            </select>
        )
    }
}

export default SelectMixBlendMode
