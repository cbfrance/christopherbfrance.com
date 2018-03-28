
import React from 'react';
import { ParentGrid, Variables } from './styles';
import { convertToGrid } from './helpers';

class DrawRectangle extends React.Component {

  constructor (props) {

    super(props);
    this.state = { downCoordinates: '0/0', upCoordinates: '0/0' };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

}

  handleMouseDown (event) {

      // Console.log(this.convertToGrid(event.clientX, event.clientY));
      event.preventDefault();
      this.setState({ upCoordinates: '0 / 0' }); // Reset when drawing a new rectangle
      this.setState({ downCoordinates: convertToGrid(this.props.position.y, this.props.position.x) });

}

  handleMouseUp (event) {

      event.preventDefault();
      this.setState({ upCoordinates: convertToGrid(this.props.position.y, this.props.position.x) });

  }

  render () {

    const boxDrawn = `${this.state.downCoordinates}/${this.state.upCoordinates}`
    const boxColor = 'hsla(204, 80%, 72%, 0.75)';

    
return (
      <Variables>
        <ParentGrid>
          <div style={{ 
              zIndex: 4,
              background: boxColor,
              gridArea: boxDrawn
            }}>
            <span style={{ fontSize: '8px' }}>{boxDrawn}</span>
          </div>
          <div
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            > 
              {this.props.children}
          </div>
        </ParentGrid>
      </Variables>
    );
  
  }

}

export default DrawRectangle;
