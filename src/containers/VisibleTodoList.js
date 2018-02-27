import { connect } from 'react-redux'
import { toggleTodo, incrementCount, decrementCount } from '../actions'
import TodoList from '../components/TodoList'
 
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}
 
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onIncrementClick: id => {
      dispatch(incrementCount(id))
    },
    onDecrementClick: id => {
      dispatch(decrementCount(id))
    }
  }
}
 
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
 
export default VisibleTodoList
