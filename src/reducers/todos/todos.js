import {
  ADD_TODO,
  TOGGLE_TODO,
  RECEIVE_TODOS,
} from '../../constants/actionTypes';

/**
 * Separated update and creation todos actions
 * for reducer composition
 * @param {array} state - array of todos
 * @param {object} action
 * @return {array}
 */
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
}
