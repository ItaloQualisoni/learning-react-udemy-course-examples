import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';

export default class Nav extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h2>Nav Component</h2>
        <NavLink to="/" >Get Weather</NavLink>
        <br/>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} to='/about'>About'</NavLink>
        <br/>
        <NavLink to="examples" className="active" style={{fontWeight: 'bold'}}>Examples</NavLink>
      </React.Fragment>
    );
  }
}