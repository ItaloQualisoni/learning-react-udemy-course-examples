import React, { Component } from 'react';

export default class WeatherMessage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      this.props.weather !== undefined ?
       <div>Weather in {this.props.weather} is 26 celsius</div>: 
       <div>No weather selected</div>
    );
  }
}

export function WeatherMessageFunction({weather}){
  return (
      weather !== undefined ?
       <div>Weather in {weather} is 26 celsius</div>: 
       <div>No weather selected</div>
    );
}


