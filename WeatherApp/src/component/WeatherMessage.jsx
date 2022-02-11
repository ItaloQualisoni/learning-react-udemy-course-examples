import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class WeatherMessage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var {location,temp} = this.props;

    return (
      location !== undefined ?
        <div>Weather in {location} is {temp} celsius</div>: 
        <div>No Location selected</div>
    );
  }
}
WeatherMessage.propTypes = {
  location: PropTypes.string.isRequired,
  temp:PropTypes.number.isRequired
}

export function WeatherMessageFunction({location,temp}){
  return (
      location !== undefined ?
        <div>Weather in {location} is {temp} celsius</div>: 
        <div>No Location selected</div>
    );
}
WeatherMessageFunction.propTypes = {
  location: PropTypes.string.isRequired,
  temp:PropTypes.number.isRequired
}


