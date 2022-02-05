import React, { useEffect, useRef } from 'react';

export function WeatherFormFunction ({onNewWeather}){
  var cityRef = useRef(null);

  function onFormSubmit(event){
    event.preventDefault()
    const newCityValue = cityRef.current.value
    if(newCityValue)
    onNewWeather(newCityValue)
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