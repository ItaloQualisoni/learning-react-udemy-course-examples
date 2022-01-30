import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <nav>
          <Link to="/">Get Weather</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    );
  }
}
