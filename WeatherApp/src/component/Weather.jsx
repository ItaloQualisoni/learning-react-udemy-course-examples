import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      newWeather: undefined
    };
    this.handleNewWeather = this.handleNewWeather.bind(this);
  }

  handleNewWeather(newWeather){
    this.setState({
      newWeather:newWeather
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>Weather Component</div>
        <WeatherForm handleNewWeather={this.handleNewWeather} />
        <WeatherMessage  weather={this.state.newWeather} />
      </React.Fragment>
    );
  }
}
