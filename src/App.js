import React, { Component } from 'react';
import Tile from './Tile';
import Hourly from './Hourly';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='top'>
          <span>Weather!</span>
        </div>
        <div className='middle'>
          <Tile day='Mon'/>
          <Tile day='Tues'/>
          <Tile day='Weds'/>
          <Tile day='Thurs'/>
          <Tile day='Fri'/>
        </div>
        <div className='bottom'>
          <Hourly/>>
        </div>
      </div>
    );
  }
}

export default App;
