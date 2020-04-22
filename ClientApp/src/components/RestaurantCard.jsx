import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function RestaurantCard({ id, name, onClick }) {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <li className="restaurant-card" onClick={handleClick}>
      <div className="restaurant-card-container">
        <img
          src="https://via.placeholder.com/150"
          className="restaurant-image"
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
            </div>
            <div className="smiley-wrapper">
              <span>70%</span>
              <FontAwesomeIcon
                icon={['far', 'grin']}
                onClick={() => console.log('underrated-click')}
              />
            </div>
          </div>
          <p className="latest-comment"> It's the worst.</p>
        </div>
      </div>
    </li>
  )
}
