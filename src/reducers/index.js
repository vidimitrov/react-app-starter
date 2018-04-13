import {combineReducers} from 'redux';

// Reducers
import {todos, visibilityFilter} from './todos';

// Combine them all and return them as a single reducer
export default combineReducers({
  todos,
  visibilityFilter,
});

