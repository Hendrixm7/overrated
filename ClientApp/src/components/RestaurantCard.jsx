import React from 'react'

export function RestaurantCard({ name }) {
  return (
    <li className="restaurant-card">
      <div className="restaurant-card-container">
        <img
          src="https://via.placeholder.com/150"
          className="restaurant-image"
        />
        <div className="restaurant-info">
          <h4 className="restaurant-name">{name}</h4>
        </div>
      </div>
    </li>
  )
}
