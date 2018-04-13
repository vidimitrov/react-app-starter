import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import {addTodo} from '../actions/todos';

let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div style={{
      textAlign: 'center',
      margin: 20,
    }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input style={{height: 38}}
          ref={(node) => {
            input = node;
          }}
        />
        <Button variant="raised" color="primary" type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

AddTodo = connect()(AddTodo);

export default AddTodo;
