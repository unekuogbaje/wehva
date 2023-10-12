import React, {Fragment, useEffect, useState } from 'react';
import WeatherDetails from './WeatherDetails';
import '../components/style.css'

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Lagos");
  
  const getWeatherInfo = async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=003cc376b1d5b53cf7682e38515a0663`;
      
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=003cc376b1d5b53cf7682e38515a0663

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
      <WeatherDetails/>
    </Fragment>
  )
}

export default SearchMain