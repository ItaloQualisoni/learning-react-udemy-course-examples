import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export function WeatherFormFunction ({onNewLocation}){
  var cityRef = useRef(null);

  function onFormSubmit(event){
    event.preventDefault()
    const newCityValue = cityRef.current.value
    if(newCityValue)
    onNewLocation(newCityValue)
    else{
      alert('value should not be empty')
    }    
  }

  return (
    <>
      <h4>WeatherFormFunction</h4>
      <form onSubmit={onFormSubmit}>
        <input ref={cityRef} placeholder='type city name'></input>
        <button>Submit</button>
      </form>
    </>
  );
  
}
WeatherFormFunction.propTypes = {
  onNewLocation: PropTypes.func.isRequired,
}