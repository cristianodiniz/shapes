import React from "react";
import PropTypes from "prop-types";


function Shapes(props) {
  
    const { shapes } = props;
   
    return (
        <svg className="shapes-container" >
          {shapes.length > 0 &&
            shapes.map(shape => (
              <polygon
                key={shape.id}
                points={shape.coordinatesToPoints(700)}
              />
            ))}
        </svg>
    );
  
}

Shapes.propTypes = {
  shapes: PropTypes.array,
};

export default Shapes;
