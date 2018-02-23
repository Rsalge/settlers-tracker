export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CLEAR = 'CLEAR';

export function increment() { // increment is the action creator
  return { // lines 6-8 is the action
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function clear() {
  return {
    type: CLEAR
  }
}
