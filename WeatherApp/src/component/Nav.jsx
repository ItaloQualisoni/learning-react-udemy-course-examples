import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const activeStyle = {
        fontWeight: 'bold'

    }

    return (
      <React.Fragment>
        <h2>Nav Component</h2>
        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} >Get Weather</NavLink>
        <br/>
        <NavLink to='/about' style={({ isActive }) => isActive ? activeStyle : undefined} >About</NavLink>
        <br/>
        <NavLink to="examples" style={({ isActive }) => isActive ? activeStyle : undefined} >Examples</NavLink>
      </React.Fragment>
    );
  }
}