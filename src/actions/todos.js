import TodosAPI from '../api/todos';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  RECEIVE_TODOS,
} from '../constants/actionTypes';

let nextTodoId = 0;

export const addTodoAction = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const addTodo = (text) => (dispatch) => {
  dispatch(addTodoAction(text));
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

// Action creator using a thunk through the redux-thunk middleware
export const getAllTodos = () => (dispatch) => {
  TodosAPI.getTodos((todos) => {
    dispatch(receiveTodos(todos));
  });
};
