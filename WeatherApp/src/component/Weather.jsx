import React, { Component } from 'react';
import { WeatherFormFunction } from './WeatherFormFunction';
import { WeatherMessageFunction } from './WeatherMessage';

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: 'Porto Alegre',
      temp:  Math.random()  * (50 - 30) + (30),
      isLoading: false
    };
    this.handleNewLocation = this.handleNewLocation.bind(this);
  }

  handleNewLocation(newLocation){
    
    this.setState({
      isLoading:true
    })

    setTimeout(()=>{
      this.setState({
        location: newLocation,
        temp: Math.random()  * (50 - 30) + (30),
        isLoading:false
      })
    },5000)
    
  }

  render() {
    var {location, temp, isLoading} = this.state;
    var fetchingMessage = 'Fetching the data'
    return (
      <>
        <WeatherFormFunction onNewLocation={this.handleNewLocation} />
        { isLoading ? <h3>{fetchingMessage}</h3> : <WeatherMessageFunction location={location} temp ={temp}/>}
      </>
    );
  }
}
