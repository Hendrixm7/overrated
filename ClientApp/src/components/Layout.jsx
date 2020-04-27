import React from 'react'
import { NavMenu } from './NavMenu'
import { Footer } from './Footer'

export function Layout(props) {
  return (
    <div>
      <NavMenu />
      {props.children}
      <Footer />
    </div>
  )
}
