import React, { Component } from 'react';
import { TextField, FloatingActionButton, Table, TableBody, TableHeader, TableRow, TableRowColumn, TableHeaderColumn } from 'material-ui';
import { ContentAdd } from 'material-ui/svg-icons'
class Turns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'selectPlayers',
      turns: [
        {playerName:'Ross', victoryPoints: 0, settlements: 1, cities: 1, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Andrew', victoryPoints: 0, settlements: 2, cities: 2, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Zac', victoryPoints: 0, settlements: 3, cities: 3, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Ben', victoryPoints: 0, settlements: 4, cities: 4, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Ross', victoryPoints: 0, settlements: 1, cities: 1, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Andrew', victoryPoints: 0, settlements: 2, cities: 2, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Zac', victoryPoints: 0, settlements: 3, cities: 3, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Ben', victoryPoints: 0, settlements: 4, cities: 4, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Ross', victoryPoints: 0, settlements: 1, cities: 1, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Andrew', victoryPoints: 0, settlements: 2, cities: 2, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Zac', victoryPoints: 0, settlements: 3, cities: 3, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Ben', victoryPoints: 0, settlements: 4, cities: 4, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Ross', victoryPoints: 0, settlements: 1, cities: 1, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Andrew', victoryPoints: 0, settlements: 2, cities: 2, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Zac', victoryPoints: 0, settlements: 3, cities: 3, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
        {playerName:'Ben', victoryPoints: 0, settlements: 4, cities: 4, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
      ],
      headerNames: [
        'Player Name',
        'Victory Points',
        'Settlements',
        'Cities',
        'Road Length',
        'Knight Count',
        'Turn',
        'Roll'
      ],
    }
    this.getTurns = this.getTurns.bind(this);
    this.generateHeaders = this.generateHeaders.bind(this);
  }

  getTurns(turn) {
    return (
      <TableRow>
        <TableRowColumn style={{textOverflow: 'none'}}>
          {turn.playerName}
        </TableRowColumn>
        <TableRowColumn>
          {turn.victoryPoints}
          <TextField type="number" />
        </TableRowColumn>
        <TableRowColumn>{turn.settlements}</TableRowColumn>
        <TableRowColumn>{turn.cities}</TableRowColumn>
        <TableRowColumn>{turn.roadLength}</TableRowColumn>
        <TableRowColumn>{turn.knightCount}</TableRowColumn>
        <TableRowColumn>{turn.turnNumber}</TableRowColumn>
        <TableRowColumn>{turn.diceRoll}</TableRowColumn>
      </TableRow>
    )
  }

  generateHeaders(header) {
    console.log('HERE are the headers', header)
    return (
      <TableHeaderColumn
        style={
          {
            textAlign: 'center',
            padding:'0',
            width:'13%',
            whiteSpace:'normal',
            wordWrap:'break-word'
          }
        }>
        {header}
      </TableHeaderColumn>
    )
  }

  render() {
    return (
      <div className="App-center-container">
      <Table
        selectable={false}
        height='90%'
        style={{overflow: 'scroll'}}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            {this.state.headerNames.map((header) => this.generateHeaders(header))}
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >

        {this.state.turns.map((turn) => this.getTurns(turn))}
        </TableBody>
      </Table>
    </div>
    );
  }
}

export default Turns;
