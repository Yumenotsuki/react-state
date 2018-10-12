import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import Lamp from './Lamp.js'; 
import logo from "./logo.svg";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true

    };
  }
  handleClick = () => {
    this.setState({working: !this.state.working});
  }
  render() {
    const working = this.state.working ? 'working' : 'sleep';
    const textBtn = this.state.working ? 'work' : 'break';
    return (
      <div>
        <header className="App-header">
          <img src={logo} className={working} alt="logo" />
        <h1 className="App-title">Simpsons Quotes</h1>
        </header>

          <div>
            <button
              onClick={this.handleClick}
              >{textBtn}</button>
            <Lamp on />
            <Lamp />
            <Quotes />
          </div>
      </div>

    );
  }
}

export default App;
