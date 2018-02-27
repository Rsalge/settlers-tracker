/* ACTIONS */

let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
 
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
 
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const incrementCount = id => {
  return {
    type: 'INCREMENT_COUNT',
    id
  }
}

export const decrementCount = id => {
  return {
    type: 'DECREMENT_COUNT',
    id
  }
}
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
