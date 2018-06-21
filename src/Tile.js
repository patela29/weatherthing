import React, { Component } from 'react';
import sun from './sun.png';
import './Tile.css';

class Tile extends Component {
  render() {
    return (
      <div className="tile">
        <span className='day'>{this.props.day}</span>
        <img src={sun}/>
        <div className='temp-hi'>
          <span>84</span>
        </div>
        <div className='temp-lo'>
          <span>68</span>
        </div>
      </div>
    );
  }
}

export default Tile;
