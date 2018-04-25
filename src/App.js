import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter/counter'
import ChuckJokes from './components/chuckJokes/chuckJokes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter/>
      <ChuckJokes/>
      </div>
    );
  }
}

export default App;
