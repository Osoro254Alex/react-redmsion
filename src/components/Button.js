import React from 'react';
import PropTypes from 'prop-types';

function Button({ color, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'steelblue',
};

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
