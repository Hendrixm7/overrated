import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { parseJSON, format } from 'date-fns'

const DATE_FORMAT = 'M/d/yyyy'

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

  let overratedPercent = 0
  let underratedPercent = 0

  if (restaurantResult.feedback) {
    overratedPercent =
      (restaurantResult.feedback.filter(feedback => feedback.overrated).length /
        restaurantResult.feedback.length) *
      100
    underratedPercent =
      (restaurantResult.feedback.filter(feedback => !feedback.overrated)
        .length /
        restaurantResult.feedback.length) *
      100
  }

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
            {!!overratedPercent && <span>{overratedPercent}%</span>}

            <FontAwesomeIcon
              icon={['far', 'meh']}
              onClick={() => console.log('overrated-click')}
            />
            <p className="rating-text">Overrated</p>
          </div>
          <div className="smiley-wrapper">
            {!!underratedPercent && <span>{underratedPercent}%</span>}

            <FontAwesomeIcon
              icon={['far', 'grin']}
              onClick={() => console.log('underrated-click')}
            />
            <p className="rating-text">Underrated</p>
          </div>
        </div>
        <div className="feedback-container">
          <h3>Reviews</h3>
          {restaurantResult.feedback &&
            restaurantResult.feedback.map(feedback => (
              <div className="feedback-item">
                <div className="feedback-item-date-rating">
                  <span className="feedback-item-datestamp">
                    {format(parseJSON(feedback.datestamp), DATE_FORMAT)}
                  </span>
                  <FontAwesomeIcon
                    icon={['far', feedback.overrated ? 'meh' : 'grin']}
                  />
                </div>
                <p className="feedback-item-comment">{feedback.comment}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
