import React from 'react';
import AppBar from 'material-ui/AppBar';
import List from '../../components/list';
import './todo.css';

const items = [{
  id: 1,
  name: 'Item 1',
}, {
  id: 2,
  name: 'Item 2',
}];

const Todo = () => (
  <div className="app">
    <AppBar
      title="React Todo"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <List items={items} />
  </div>
);

export default Todo;
