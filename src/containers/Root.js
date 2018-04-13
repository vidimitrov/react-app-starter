import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import TodoDetails from './TodoDetails';

/**
 * TODO:
 * 1. Load some dummy data through the fetch action
 * 2. Add some basic tests
 * 3. Аdd basic components from the Material UI kit for demo
 * 4. [Optional] Use an App Shell approach
 * 5. [Optional] Make sure that the app is PWA-ready
 */

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact={true} path="/" component={App} />
          <Route path="/:id/details" component={TodoDetails} />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
