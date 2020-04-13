import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Home() {
  return (
    <div className="home-page">
      <div className="jumbotron">
        <div className="search-section">
          <h1 className="">Overrated</h1>
          <p>What's overrated in your neighborhood?</p>

          <div className="search-bar">
            <input placeholder="Search" />

            <button className="submit-btn">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
