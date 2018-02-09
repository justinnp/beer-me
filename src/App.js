import React, { Component } from 'react';
import logo from './beer.png';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: " ",
    }
  }

  componentDidMount() {
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    console.log()
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to BeerMe!</h1>
          </header>
          <p className="App-intro">
            Please enter in the kind of beer you want to try:
          </p>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="IPA"/>
            <MenuItem value={2} primaryText="Sour"/>
            <MenuItem value={3} primaryText="Ale"/>
            <MenuItem value={4} primaryText="Stout"/>
          </DropDownMenu>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
