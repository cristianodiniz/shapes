import React from "react";
import PropTypes from 'prop-types';

function Sidebar({ shapes, selected ,handlerOnClick}) {
  return (
    <header className="sidebar-container">
      {shapes.length > 0 &&
        shapes.map(({id,name}) => (
          <button
            className={selected === id ? "selected" : null}
            key={id}
            onClick={handlerOnClick(id)}
          >
            {name}
          </button>
        ))}
    </header>
  );
}

Sidebar.propTypes = {
  shapes: PropTypes.array,
  selected: PropTypes.number,
  handlerOnClick: PropTypes.func
}

export default Sidebar;
