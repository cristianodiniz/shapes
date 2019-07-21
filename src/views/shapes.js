import React from "react";
import PropTypes from "prop-types";


function Shapes(props) {
  
    const { shapes , selected,handlerOnClick} = props;
   
    return (
        <svg className="shapes-container" >
          {shapes.length > 0 &&
            shapes.map(shape => (
              <polygon
                key={shape.id}
                points={shape.coordinatesToPoints(700)}
                className={selected === shape.id ? "selected" : null}
                onClick={handlerOnClick(shape.id)}
              />
            ))}
        </svg>
    );
  
}

Shapes.propTypes = {
  shapes: PropTypes.array,
  selected: PropTypes.number,
  handlerOnClick: PropTypes.func
};

export default Shapes;
