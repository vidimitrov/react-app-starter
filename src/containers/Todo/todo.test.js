import React from 'react';
import {shallow} from 'enzyme';
import Todo from './';

describe('Example Todo component', () => {
  test('renders without crashing', () => {
    const todoApp = shallow(<Todo />);
    expect(todoApp.exists()).toEqual(true);
  });
});
