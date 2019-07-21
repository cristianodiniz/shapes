import React from "react";
import PropTypes from 'prop-types';

function Sidebar({ shapes }) {
  return (
    <header className="sidebar-container">
      {shapes.length > 0 &&
        shapes.map(({id,name}) => (
          <button
            key={id}
          >
            {name}
          </button>
        ))}
    </header>
  );
}

Sidebar.propTypes = {
  shapes: PropTypes.array
}

export default Sidebar;
