import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor(props){
    super(props);
    this.locationRef = React.createRef();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault()
    var newLocationValue = this.locationRef.current.value
    if(newLocationValue){
      this.locationRef.current.value = '';
      this.props.onNewWeather(newLocationValue)
    }
    else{
      alert('value should not be empty')
    }    
  }

  render() {
    return (
      <>
        <h4>WeatherForm Class</h4>
        <form onSubmit={this.onFormSubmit}>
          <input ref={this.locationRef} placeholder='type city name'></input>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
