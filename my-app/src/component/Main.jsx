import React, { Component } from 'react';
import { Outlet } from 'react-router';
import Nav from './Nav';

export default class Main extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
    return (
        <div>
            <Nav/>
            <h2>Main Component</h2>
            <Outlet/>
        </div>
    );
  }
}
