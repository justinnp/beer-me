import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: "",
    }
  }

  componentDidMount() {
    fetch('http://api.brewerydb.com/v2/fd77b4fabf07b01f131131ac4bf85ac6')
    .then(results => {
      console.log("hello");
      console.log(results.json());
      return results.json();
    });


  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to BeerMe!</h1>
          </header>
          <p className="App-intro">
            Please enter in your beer of choice:
          </p>
          <TextField
            hintText="Enter a beer!"
            floatingLabelText="beerMe!"
            />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
