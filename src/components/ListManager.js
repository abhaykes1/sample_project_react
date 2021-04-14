import React from 'react';
import HTTP from '../services/httpservice'
import List from './List'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ListManager extends React.Component{


    state = {
        items:[],
        newItemText:'',
    }


    
    componentWillMount() {
      HTTP.get('/')
      .then(function (data) {
        this.setState({items:data});
      }.bind(this));
      console.log(this.state.items);
    }

    handleSubmit = (ele) => {
      ele.preventDefault();
      if(!this.state.newItemText){
        return;
      }
      var currentItems = this.state.items;
      var newItem;
      if(currentItems.length>0){
        newItem = {
          "id": (parseInt(currentItems[currentItems.length -1].id) + 1).toString(),
          "text": this.state.newItemText
        };
      }
      else {
        newItem = {
          "id": "0",
          "text": this.state.newItemText
        };
      }
      HTTP.post('/',newItem);
      currentItems.push(newItem);
      this.setState({ items: currentItems, newItemText: '' });
    }
    render() {
      var divStyle = {
        marginTop: 20
      };

      return (
        <div className="col-sm-4" style={divStyle}>
          <div className="panel panel-primary">
            <div className="panel panel-heading">
              <h3>{this.props.title}</h3>
            </div>
            <div className="panel panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-9">
                    <TextField 
                      onChange={(e)=>{this.setState({newItemText: e.target.value})}} 
                      value={this.state.newItemText} 
                      label="enter feature to add"
                      variant="outlined"
                    />
                  </div>
                  <div className="col-sm-2">
                    <Button onClick={this.handleSubmit} style={divStyle} variant="contained" color="primary">
                      Add
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <List items={this.state.items}/>
          </div>
        </div>
      );
    }
};


export default ListManager;