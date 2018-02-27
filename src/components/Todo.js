import React from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';


 
const Todo = ({ onClick, completed, text, img, onIncrementClick, onDecrementClick, id, count, calculated }) => {
  let showCounter = 'inherit'
  if ( calculated ) {
    showCounter = 'none'
  }
  return (
    <li style={{listStyleType: 'none', textAlign: 'center', width: '12%'}}>
      <p> {text} </p>
      {count}
      <div style={{display:showCounter}}>
        <div style={{display: 'inline-block', borderRadius:'75%', width: '40%', backgroundColor:'red', border:'solid'}} onClick={()=> onDecrementClick(id)} >
          -
        </div>
        <div style={{display: 'inline-block', borderRadius:'75%', width: '40%', backgroundColor:'#0dd80d', border:'solid'}} onClick={()=> onIncrementClick(id)} >
          +
        </div>
      </div>
    </li>
  )
}
 
// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }
 
export default Todo
