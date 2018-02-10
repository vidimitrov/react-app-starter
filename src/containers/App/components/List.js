import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const ListComponent = ({ items }) => (
  <List>
    {items.map(item => <ListItem primaryText={item.name} />)}
  </List>
);

ListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

ListComponent.defaultProps = {
  items: [],
};

export default ListComponent;
