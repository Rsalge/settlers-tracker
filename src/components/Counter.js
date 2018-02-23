import React from 'react';
import { connect } from 'react-redux'

const Counter = (props) => <div>{props.counter}</div>

var mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
}
export default connect(mapStateToProps)(Counter);
