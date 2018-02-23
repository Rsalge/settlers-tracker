import React, { Component } from 'react';
import { List, ListItem, Subheader } from 'material-ui';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'selectPlayers',
      games: [{name:'game1', dateCreated:'022118'},
              {name:'game2', dateCreated:'022118'},
              {name:'game3', dateCreated:'022118'},
              {name:'game4', dateCreated:'022118'},
            ],
    }
    this.getGames = this.getGames.bind(this);
  }
  getGames(game) {
    return (
        <ListItem key={game.name} primaryText={game.name} />
    )
  }
  render() {
    return (
      <List className="App-left-container">
        <Subheader> Previous Games </Subheader>
        {this.state.games.map((game) => this.getGames(game))}
      </List>
    );
  }
}

export default Games;
