
import React from 'react';

class DrawRectangle extends React.Component {

  constructor (props) {

    super(props);
    this.state = { down: 0, up: 0 };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

}

  handleMouseDown (event) {

      const xy = `${event.clientX}/${event.clientY}`

      console.log(xy);
      event.preventDefault();
      this.setState({ down: xy });

  }

  handleMouseUp (event) {

      const xy = `${event.clientX}/${event.clientY}`

      console.log(xy);
      event.preventDefault();
      this.setState({ up: xy });

  }

  render () {


    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        > 
          <h2>
            {this.state.up}/{this.state.down}
          </h2>

          {this.props.children}
      </div>
    );
  
  }

}

export default DrawRectangle;
