import React, { Component } from 'react';
import { Cell, Grid, Row } from 'react-foundation';
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
            <Grid className="display">
                <Cell small={2} large={4}></Cell>
                <Cell small={4} large={4}> <Outlet/></Cell>
                <Cell small={4} large={4}></Cell>                
            </Grid>     
        </div>
    );
  }
}
