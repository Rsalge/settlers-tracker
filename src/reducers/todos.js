const inputFields = [
  {id: 'playerName', text: 'Player Name', calculated: true, count: 0},
  {id: 'turn', text: 'Turn', calculated: true, count: 0},
  {id: 'victoryPoints', text: 'Victory Points', calculated: true, count: 0},
  {id: 'settlements', text: 'Settlements', calculated: false, count: 0},
  {id: 'cities', text: 'Cities', calculated: false, count: 0},
  {id: 'roadLength', text: 'Road Length', calculated: false, count: 0},
  {id: 'knightCount', text: 'Knight Count', calculated: false, count: 0},
  {id: 'roll', text: 'Roll', calculated: false, count: 0},
]

const todos = (state = inputFields, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'INCREMENT_COUNT':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, count: todo.count + 1}
          : todo
      )
    case 'DECREMENT_COUNT':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, count: todo.count - 1}
          : todo
      )
    default:
      return state
  }
}
 
export default todos
