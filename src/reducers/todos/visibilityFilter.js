import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from '../../actions/todos';
const {SHOW_ALL} = VisibilityFilters;

/**
 * Separated visibility filter actions
 * for reducer composition
 * @param {string} state - array of todos
 * @param {object} action
 * @return {array}
 */
export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

