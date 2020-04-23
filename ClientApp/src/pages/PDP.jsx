import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function PDP(props) {
  const history = useHistory()
  const [restaurantResult, setRestaurantResult] = useState({})

  const handleReviewClick = () => {
    history.push(`/leave-a-review?id=${restaurantResult.id}`)
  }

  useEffect(() => {
    const id = props.match.params.id
    axios
      .get(`api/Restaurant/${id}`)
      .then(response => setRestaurantResult(response.data))
  }, [props.match.params.id])

  return (
    <div className="pdp-page">
      <div className="hero-banner"></div>
      <div className="body-content">
        <h1 className="restaurant-name">{restaurantResult.name}</h1>
        <button className="review-button" onClick={handleReviewClick}>
          Leave a Review
        </button>
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
        <div className="feedback-container">{/* <FeedbackItem /> */}</div>
      </div>
    </div>
  )
}
