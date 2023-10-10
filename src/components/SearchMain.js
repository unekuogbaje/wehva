import React, {Fragment} from 'react'
import '../components/style.css'

function SearchMain() {
  return (
    <Fragment>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search city.."
            id="search"
          />
          <button className="searchButton">
            Search
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default SearchMain