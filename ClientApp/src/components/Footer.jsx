import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
  return (
    <footer className="footer">
      <FontAwesomeIcon icon={['fa', 'cat']} />
      <p>Overrated &copy; 2020</p>
    </footer>
  )
}
