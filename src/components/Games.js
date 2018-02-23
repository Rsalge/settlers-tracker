import React, { Component } from 'react';
import { List, ListItem, Subheader } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement, clear } from '../actions/actions.js';

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
      <div className="App-left-container">
        <List >
          <Subheader> Previous Games </Subheader>
          {this.state.games.map((game) => this.getGames(game))}
        </List>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement, clear }, dispatch);
}

export default connect(null, mapDispatchToProps)(Games);
