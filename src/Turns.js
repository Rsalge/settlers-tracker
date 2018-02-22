import React, { Component } from 'react';
import { TextField, FloatingActionButton, Table, TableBody, TableHeader, TableRow, TableRowColumn, TableHeaderColumn } from 'material-ui';
import { ContentAdd } from 'material-ui/svg-icons'
class Turns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'selectPlayers',
      turns: [{playerName:'Ross', victoryPoints: 0, settlements: 1, cities: 1, roadLength: 1, knightCount: 1, turnNumber: 1, diceRoll: 1 },
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
    }
    this.getTurns = this.getTurns.bind(this);
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
  render() {
    return (
      <Table
        // className="App-center-container"
        selectable={false}
        height='90%'
        style={{overflow: 'hidden'}}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Player Name </TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Victory Points </TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Settlements </TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Cities </TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Road Length </TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Knight Count </TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Turn Number </TableHeaderColumn>
            <TableHeaderColumn style={{textAlign: 'center', padding:'0', width:'13%', whiteSpace:'normal', wordWrap:'break-word'}}> Dice Roll </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          
          {this.state.turns.map((turn) => this.getTurns(turn))}
        </TableBody>
      </Table>
    );
  }
}

export default Turns;
