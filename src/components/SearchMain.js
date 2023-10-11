import React, {Fragment, useEffect, useState } from 'react';
import WeatherDetails from './WeatherDetails';
import '../components/style.css'

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Lagos");
  console.log(searchTerm);
  return (
    <Fragment>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search city.."
            id="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton">
            Search
          </button>
        </div>
      </div>
      <WeatherDetails/>
    </Fragment>
  )
}

export default SearchMain