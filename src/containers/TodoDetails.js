import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Details = ({todo}) => {
  return (
    <div>
      <p>ID: {todo.id}</p>
      <p>Text: {todo.text}</p>
      <p>Completed: {todo.completed}</p>
    </div>
  );
};

Details.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos.find((todo) =>
      todo.id === parseInt(ownProps.match.params.id)),
  };
};

const TodoDetails = withRouter(connect(
  mapStateToProps
)(Details));

export default TodoDetails;
