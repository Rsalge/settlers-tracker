import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import RaisedButton from 'material-ui/RaisedButton';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};
 
const TodoList = ({ todos, onTodoClick, onIncrementClick, onDecrementClick }) => (
  <div style={{display:'inline'}}>
    <ul style={styles.gridList} cols={2.2}>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onDecrementClick={onDecrementClick} onIncrementClick={onIncrementClick} />
      ))}
    </ul>
    <RaisedButton style={{width:'100%', height:'50px'}}>
      Next turn
    </RaisedButton>
  </div>
)
 
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }
 
export default TodoList
