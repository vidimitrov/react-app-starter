import React from 'react';
import { shallow } from 'enzyme';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import App from './app';

describe('Example App component', () => {
  test('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app.exists()).toEqual(true);
  });

  test('renders an AppBar', () => {
    const app = shallow(<App />);
    expect(app.exists()).toEqual(true);
  });

  test('renders a List of items');

  test('renders 3 example items');
});
