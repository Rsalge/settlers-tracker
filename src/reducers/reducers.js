import { combineReducers } from 'redux';
import {
   INCREMENT,
    DECREMENT,
    CLEAR
  } from '../actions/actions.js'

const initialState = {
  counter: 0
};

let counterReducer = (state = initialState.counter, action) => { // state on this line is actually the previous state
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return 0;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
