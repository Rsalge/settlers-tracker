import React from 'react';
import { connect } from 'react-redux'

const Counter = (props) => <div>{props.counter1}</div>

var mapStateToProps = (state) => {
  return {
    counter1: state.counter1
  };
}
export default connect(mapStateToProps)(Counter);
