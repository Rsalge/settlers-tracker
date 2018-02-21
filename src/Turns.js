import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableRow, TableRowColumn, TableHeaderColumn } from 'material-ui';

class Turns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'selectPlayers',
      turns: [{playerName:'Ross', settlements: 1, cities: 1},
              {playerName:'Andrew', settlements: 2, cities: 2},
              {playerName:'Zac', settlements: 3, cities: 3},
              {playerName:'Ben', settlements: 4, cities: 4},
            ],
    }
    this.getTurns = this.getTurns.bind(this);
  }
  getTurns(turn) {
    return (
      <TableRow>
        <TableRowColumn>{turn.playerName}</TableRowColumn>
        <TableRowColumn>{turn.settlements}</TableRowColumn>
        <TableRowColumn>{turn.cities}</TableRowColumn>
      </TableRow>
    )
  }
  render() {
    return (
      <Table className="App-center-container">
        <TableHeader>
          <TableRow>
            <TableHeaderColumn> Player Name </TableHeaderColumn>
            <TableHeaderColumn> Settlements </TableHeaderColumn>
            <TableHeaderColumn> Cities </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.turns.map((turn) => this.getTurns(turn))}
        </TableBody>
      </Table>
    );
  }
}

export default Turns;
