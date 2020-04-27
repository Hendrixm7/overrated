import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function RestaurantCard({ id, name, onClick, latestComment }) {
  return (
    <Link to={`/restaurant/${id}`}>
      <li className="restaurant-card">
        <div className="restaurant-card-container">
          <img
            src="https://via.placeholder.com/150"
            className="restaurant-image"
            alt=""
          />
          <div className="restaurant-info">
            <h4 className="restaurant-name">{name}</h4>
            <div className="restaurant-rating">
              <div className="smiley-wrapper">
                <span>30%</span>

                <FontAwesomeIcon
                  icon={['far', 'meh']}
                  onClick={() => console.log('overrated-click')}
                />
                <p className="rating-text">Overrated</p>
              </div>
              <div className="smiley-wrapper">
                <span>70%</span>

                <FontAwesomeIcon
                  icon={['far', 'grin']}
                  onClick={() => console.log('underrated-click')}
                />
                <p className="rating-text">Underrated</p>
              </div>
            </div>
            <p className="latest-comment">{latestComment}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
