import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import { WeatherFormFunction } from './WeatherFormFunction';
import WeatherMessage, { WeatherMessageFunction } from './WeatherMessage';

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: undefined
    };
    this.handleNewWeather = this.handleNewWeather.bind(this);
  }

  handleNewWeather(newWeather){
    this.setState({
      weather:newWeather
    })
  }

  render() {
    return (
      <>
        <div>Weather Component</div>
        <WeatherForm onNewWeather={this.handleNewWeather} />
        <WeatherMessage  weather={this.state.weather} />
        <br/>
        <WeatherFormFunction onNewWeather={this.handleNewWeather} />
        <WeatherMessageFunction  weather={this.state.weather} />
      </>
    );
  }
}
