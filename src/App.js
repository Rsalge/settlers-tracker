import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { AppBar, List, ListItem } from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
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
          <p className="App-center-container"> TESTING </p>
          <AppBar className="App-bar" title="Settlers Tracker" />
          <List className="App-left-container">
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts"  />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
