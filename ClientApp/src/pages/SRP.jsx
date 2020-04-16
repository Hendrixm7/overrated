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
      .then(res => setRestaurants(res.data))
  })

  return (
    <div className="container">
      {restaurants.map(restaurant => (
        <RestaurantCard name={restaurant.name} address={restaurant.address} />
      ))}
    </div>
  )
}
