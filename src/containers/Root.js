import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import TodoDetails from './TodoDetails';

/**
 * TODO:
 * 0. Introduce the router to open the item page (details)
 * 1. Add a sample action
 * 2. Add a sample reducer
 * 3. Load some dummy data through the fetch action
 * 4. Add some basic tests
 * 5. Аdd basic components from the Material UI kit for demo
 * 6. For each of the items show a details view on click
 * 7. [Optional] Use an App Shell approach
 * 8. [Optional] Make sure that the app is PWA-ready
 */

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={App} />
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
