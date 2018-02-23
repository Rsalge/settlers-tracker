import React, { Component } from 'react';
import { List, ListItem, Subheader } from 'material-ui';

import Footer from './Footer.js'
import AddTodo from '../containers/AddToDo.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'


// import { increment, decrement, clear, incrementVP, decrementVP, clearVP } from '../actions/actions.js';

class CurrentTurn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App-top-center-container">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default CurrentTurn;
