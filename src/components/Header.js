import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, onChangeBtn }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        className="add-btn"
        color={onChangeBtn ? 'grey' : 'green'}
        text={onChangeBtn ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
