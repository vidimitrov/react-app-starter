import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Todo = ({onClick, completed, text, id}) => (
  <li

    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    <span onClick={onClick}>{text} - </span>
    <Link to={`/${id}/details`}>Details</Link>
    <hr />
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
