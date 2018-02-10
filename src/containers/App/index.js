import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from './components/List';
import './app.css';

/**
 * TODO:
 * 0. Introduce the router to open the item page (details)
 * 1. Add a sample action
 * 2. Add a sample reducer
 * 3. Load some dummy data through the fetch action
 * 4. Add some basic tests
 * 5. List the items in a simple Material UI kit list
 * 6. For each of the items show a details view on click
 */

const items = [{
  name: 'Item 1',
}, {
  name: 'Item 2',
}];

const App = () => (
  <MuiThemeProvider>
    <div className="app">
      <AppBar
        title="React Starter"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <List items={items} />
    </div>
  </MuiThemeProvider>
);

export default App;
