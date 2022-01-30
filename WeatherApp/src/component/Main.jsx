import React, { Component } from 'react';
import Nav from './Nav';

export default class Main extends Component {
    constructor(props){
        console.log(props)
        super(props);
    }
    
    render() {
    console.log(this.props)
    return (
        <div>
            <Nav/>
            <h2>Main Component</h2>
            {this.props.children}
        </div>
    );
  }
}
