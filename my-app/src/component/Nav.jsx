import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';

export default function Nav() {
  return (
      <React.Fragment>
        <h2>Nav Component</h2>
        <NavLink to="/" >Get Weather</NavLink>
        <br/>
        <NavLink to='about' className={({isActive}) => isActive ? 'active' : '' }>About'</NavLink>
        <br/>
        <NavLink to="examples">Examples</NavLink>
      </React.Fragment>
  );
}

