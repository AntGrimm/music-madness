import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'

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
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
