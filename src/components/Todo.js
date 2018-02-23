import React from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList';

 
const Todo = ({ onClick, completed, text, img }) => (
  <div>

    <GridTile
          key={'test'}
          titleStyle={{
            color: 'rgb(50, 188, 212)',
          }}
          style={{
            width: '100%',
            textAlign: 'center',
            border: 'solid'
          }}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <p> {text} </p>
          <p style={{border:'solid'}}> {text} </p>

        </GridTile>
      </div>
)
 
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
 
export default Todo
