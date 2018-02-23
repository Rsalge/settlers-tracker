const inputFields = [
  {id: 'playerName', text: 'Player Name', completed: false, img: '../images/CatanCard_VictoryPoint.png'},
  {id: 'victoryPoints', text: 'Victory Points', completed: false},
  {id: 'settlements', text: 'Settlements', completed: false},
  {id: 'cities', text: 'Cities', completed: false},
  {id: 'roadLength', text: 'Road Length', completed: false},
  {id: 'knightCount', text: 'Knight Count', completed: false},
  {id: 'turn', text: 'Turn', completed: false},
  {id: 'roll', text: 'Roll', completed: false},
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
    default:
      return state
  }
}
 
export default todos
