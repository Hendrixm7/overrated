import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>
        Not sure how you got here. Do you want to{' '}
        <a href="" onClick="window.history.go(-1); return false;">
          go back?
        </a>
      </h2>
    </div>
  )
}

export default NotFound
