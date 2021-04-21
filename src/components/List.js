import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from './ListItem'

class List extends React.Component{
  state = {
    items:[],
  }
  render() {
    var listItem =  this.props.items.map(function (items) {
      return (
        <ListItem key = {items.id} style={{textAlign: "center", paddingRight: "50px"}}>
                  <ListItemText
                    primary={items.text}
                  />
        </ListItem>
      );
    });

    return (
      <ul>{listItem}</ul>
    );
  }
}

export default List;