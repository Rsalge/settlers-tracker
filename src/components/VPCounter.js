import React from 'react';
import { connect } from 'react-redux'

const VPCounter = (props) => <div>{props.victoryPoints}</div>

var mapStateToProps = (state) => {
  return {
    victoryPoints: state.victoryPoints
  };
}
export default connect(mapStateToProps)(VPCounter);
