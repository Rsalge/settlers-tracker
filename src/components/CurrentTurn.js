import React, { Component } from 'react';
import { List, ListItem, Subheader } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from './Counter.js'

import { increment, decrement, clear } from '../actions/actions.js';

class CurrentTurn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Counter />
        <div>
          <button onClick={this.props.increment}> INCREMENT</button>
          <button onClick={this.props.decrement}> DECREMENT</button>
          <button onClick={this.props.clear}> CLEAR </button>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement, clear }, dispatch);
}

export default connect(null, mapDispatchToProps)(CurrentTurn);
