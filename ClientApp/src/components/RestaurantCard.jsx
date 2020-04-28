import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const DECIMAL_PLACES = 0

export function RestaurantCard({
  id,
  name,
  latestComment,
  overrated,
  underrated,
  imgSrc,
}) {
  const total = overrated + underrated
  const overratedPercent = isNaN(
    ((overrated / total) * 100).toFixed(DECIMAL_PLACES)
  )
    ? 0
    : ((overrated / total) * 100).toFixed(DECIMAL_PLACES)

  const underratedPercent = isNaN(
    ((underrated / total) * 100).toFixed(DECIMAL_PLACES)
  )
    ? 0
    : ((underrated / total) * 100).toFixed(DECIMAL_PLACES)

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
                <span>{overratedPercent}%</span>

                <FontAwesomeIcon
                  icon={['far', 'meh']}
                  onClick={() => console.log('overrated-click')}
                />
                <p className="rating-text">Overrated</p>
              </div>
              <div className="smiley-wrapper">
                <span>{underratedPercent}%</span>

                <FontAwesomeIcon
                  icon={['far', 'grin']}
                  onClick={() => console.log('underrated-click')}
                />
                <p className="rating-text">Underrated</p>
              </div>
            </div>
            {latestComment && <p className="latest-comment">{latestComment}</p>}
          </div>
        </div>
      </li>
    </Link>
  )
}
