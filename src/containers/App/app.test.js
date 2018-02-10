import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('Example App component', () => {
  test('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app.exists()).toEqual(true);
  });
});
