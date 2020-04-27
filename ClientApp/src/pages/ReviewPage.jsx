import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useQuery } from '../hooks'

export function ReviewPage(props) {
  const history = useHistory()
  const query = useQuery()
  const [restaurantResult, setRestaurantResult] = useState({})
  const [overrated, setOverrated] = useState(null)
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const isValid = !!comment && overrated !== null

    if (isValid) {
      axios
        .post('api/Feedback', {
          restaurantId: parseInt(query.get('id')),
          overrated,
          comment,
        })
        .then(() => {
          history.push(`/restaurant/${query.get('id')}`)
        })
    } else {
      setError('Please submit comment and rating.')
    }
  }

  const handleTextChange = e => {
    setComment(e.target.value)
  }

  useEffect(() => {
    const id = query.get('id')
    axios
      .get(`api/Restaurant/${id}`)
      .then(response => setRestaurantResult(response.data))
  }, [props.match.params.id, query])

  return (
    <div className="review-page">
      <h1 className="restaurant-name">{restaurantResult.name}</h1>
      <div className="rating-icons">
        <FontAwesomeIcon
          icon={['far', 'grin']}
          className={overrated !== null && !overrated ? 'active' : ''}
          onClick={() => setOverrated(false)}
        />
        <FontAwesomeIcon
          icon={['far', 'meh']}
          className={overrated !== null && overrated ? 'active' : ''}
          onClick={() => setOverrated(true)}
        />
      </div>
      <textarea
        placeholder="type your review here"
        rows={15}
        value={comment}
        onChange={handleTextChange}
      />
      {!!error && <p className="error-message">{error}</p>}
      <button className="review-button" onClick={handleSubmit}>
        Submit Review
      </button>
    </div>
  )
}
