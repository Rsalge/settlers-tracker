import React, { Component } from 'react';
import Games from './Games.js';
import PlayerStats from './PlayerStats.js';
import Turns from './Turns.js';
import { AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'selectPlayers',
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar className="App-bar" title="Settlers Tracker" />
          <Games />
          <Turns className="App-center-container"/>
          <PlayerStats />
        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
