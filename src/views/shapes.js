import React, { Component } from "react";
import PropTypes from "prop-types";

class Shapes extends Component {
  containerElement = React.createRef();
  state = {
    dimension: 0
  };

  componentDidMount = () => {
    this.updateDimension();
    window.addEventListener("resize", this.updateDimension);
  };

  componentWillMount = () => {
    this.updateDimension();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimension);
  };

  updateDimension = () => {
    if (this.containerElement && this.containerElement.current) {
      const { offsetHeight, offsetWidth } = this.containerElement.current;
      const dimension = Math.min(offsetWidth, offsetHeight);
      this.setState({ ...this.state, dimension });
    }
  };

  render() {
    const { shapes, selected, handlerOnClick } = this.props;
    const { dimension } = this.state;

    return (
      <div className="shapes-container" ref={this.containerElement}>
        <svg>
          {shapes.length > 0 &&
            shapes.map(shape => (
              <polygon
                key={shape.id}
                points={shape.coordinatesToPoints(dimension)}
                className={selected === shape.id ? "selected" : null}
                onClick={handlerOnClick(shape.id)}
              />
            ))}
        </svg>
      </div>
    );
  }
}

Shapes.propTypes = {
  shapes: PropTypes.array,
  selected: PropTypes.number,
  handlerOnClick: PropTypes.func
};

export default Shapes;
