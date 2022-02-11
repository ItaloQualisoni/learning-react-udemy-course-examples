import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem, TopBar, TopBarLeft, TopBarRight, MenuText } from "react-foundation";

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const activeStyle = {
      fontWeight: 'bold'

    }

    return (
      <TopBar>
        <TopBarLeft>
          <Menu>
            <MenuText>
              React Weather App
            </MenuText>
            <MenuItem>
              <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} >Get Weather</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='/about' style={({ isActive }) => isActive ? activeStyle : undefined} >About</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="examples" style={({ isActive }) => isActive ? activeStyle : undefined} >Examples</NavLink>
            </MenuItem>
          </Menu>
        </TopBarLeft>
        <TopBarRight>
          <NavLink to="search" style={({ isActive }) => isActive ? activeStyle : undefined} >Search</NavLink>
        </TopBarRight>
      </TopBar>
    );
  }
}