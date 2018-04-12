import React from 'react';
import {shallow} from 'enzyme';
import ListItem from 'material-ui/List/ListItem';
import List from './';

const items = [{
  id: 1,
  name: 'Item 1',
}, {
  id: 2,
  name: 'Item 2',
}];

describe('List component', () => {
  test('renders without crashing', () => {
    const list = shallow(<List items={items} />);
    expect(list.exists()).toEqual(true);
  });
  test('to contain list item', () => {
    const list = shallow(<List items={items} />);
    expect(list.contains(<ListItem key={1} primaryText="Item 1" />)
    ).toBeTruthy();
    expect(list.contains(<ListItem key={2} primaryText="Item 2" />)
    ).toBeTruthy();
  });
});
