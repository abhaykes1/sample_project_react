import React from 'react';
import List from './List';


class ListItem extends React.Component{
  render() {
    return (
      <div id={this.props.key}>
        <h4>{this.props.ingredient}</h4>
      </div>
    );
  }
};

export default ListItem