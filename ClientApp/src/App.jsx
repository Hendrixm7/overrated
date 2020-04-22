import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SRP } from './pages/SRP'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import { PDP } from './pages/PDP'
import { initIcons } from './helpers'

import './styles/main.scss'

initIcons()

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SRP} />
          <Route path="/restaurant/:id" component={PDP} />
          <Route exact path="/counter" component={HelloWorld} />
          <Route exact path="/typescript" component={HeyWorld} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
