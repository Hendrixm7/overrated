import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Home() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()

  const handleSearchClick = () => {
    history.push(`/search?name=${searchValue}`)
  }

  const handleSearchOnChange = e => setSearchValue(e.target.value)

  return (
    <div className="home-page">
      <div className="jumbotron">
        <div className="search-section">
          <h1>Overrated</h1>
          <p>What's overrated in your neighborhood?</p>

          <div className="search-bar">
            <input
              placeholder="Search"
              onChange={handleSearchOnChange}
              value={searchValue}
            />

            <button className="submit-btn" onClick={handleSearchClick}>
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
