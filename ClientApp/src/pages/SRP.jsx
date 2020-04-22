import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { useQuery } from '../hooks'
import { RestaurantCard } from '../components/RestaurantCard'

export function SRP() {
  const history = useHistory()
  const query = useQuery()
  const [restaurants, setRestaurants] = useState([])

  const handleCardClick = id => {
    history.push(`/restaurant/${id}`)
  }

  useEffect(() => {
    axios
      .get('api/Restaurant/search', {
        params: {
          name: query.get('name'),
        },
      })
      .then(response => setRestaurants(response.data))
  }, [query.get('name')])

  return (
    <div className="srp-page">
      <ul className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={`${restaurant.name}-${index}`}
            id={restaurant.id}
            name={restaurant.name}
            address={restaurant.location}
            onClick={handleCardClick}
            test="michelle"
          />
        ))}
      </ul>
    </div>
  )
}
