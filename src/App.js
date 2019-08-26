import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Bands from './components/Bands'
import Band from './components/Band'

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1>Tony's Bands!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
              <li>
                <Link to="/threeDoorsDown">3 Doors Down</Link>
              </li>
              <li>
                <Link to="/rollingStones">The Rolling Stones</Link>
              </li>
              <li>
                <Link to="/beatles">The Beatles</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={Bands}></Route>
          <Route exact path="/:category/:title" component={Band}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
