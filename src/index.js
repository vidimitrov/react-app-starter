/* eslint no-undef: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';
import * as reducers from './reducers';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middlewares = [thunk];

export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension &&
      process.env.NODE_ENV === 'development' ?
      window.devToolsExtension() : (f) => f
  )
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));

registerServiceWorker();
