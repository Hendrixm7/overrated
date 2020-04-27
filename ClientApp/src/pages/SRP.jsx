import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useQuery } from '../hooks'
import { RestaurantCard } from '../components/RestaurantCard'

export function SRP() {
  const query = useQuery()
  const [restaurants, setRestaurants] = useState([])

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
            latestComment={
              restaurant.feedback[restaurant.feedback.length - 1].comment
            }
          />
        ))}
      </ul>
    </div>
  )
}
