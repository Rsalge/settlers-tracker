import React, { Component } from 'react';
import { List, ListItem, Subheader } from 'material-ui';

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'selectPlayers',
      playerStats: [{name:'Ross', dateCreated:'022118'},
              {name:'Andrew', dateCreated:'022118'},
              {name:'Zac', dateCreated:'022118'},
              {name:'Ben', dateCreated:'022118'},
            ],
    }
    this.getPlayerStats = this.getPlayerStats.bind(this);
  }
  getPlayerStats(game) {
    return (
        <ListItem key={game.name} primaryText={game.name} />
    )
  }
  render() {
    return (
      <List className="App-right-container">
        <Subheader> Player Stats </Subheader>
        {this.state.playerStats.map((game) => this.getPlayerStats(game))}
      </List>
    );
  }
}

export default PlayerStats;
