import React, {Fragment, useEffect, useState } from 'react';
import WeatherDetails from './WeatherDetails';
import '../components/style.css'

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Lagos");
  const [tempInfo, setTempInfo] = useState({});
  
  const getWeatherInfo = async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=003cc376b1d5b53cf7682e38515a0663`;
      
      let res = await fetch(url);
      let data = await res.json();
      
      const {temp, humidity, pressure} = data.main
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo)
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () =>{
    getWeatherInfo()
  }, [])
  return (
    <Fragment>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search city.."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherDetails {...tempInfo}/>
    </Fragment>
  )
}

export default SearchMain