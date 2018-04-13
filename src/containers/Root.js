import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Todo from './Todo';

/**
 * TODO:
 * 0. Introduce the router to open the item page (details)
 * 1. Add a sample action
 * 2. Add a sample reducer
 * 3. Load some dummy data through the fetch action
 * 4. Add some basic tests
 * 5. Аdd basic components from the Material UI kit for demo
 * 6. For each of the items show a details view on click
 * 7. Use an App Shell approach
 * 8. Make sure that the app is PWA-ready
 */

const Root = () => (
  <MuiThemeProvider>
    <Todo />
  </MuiThemeProvider>
);

export default Root;
