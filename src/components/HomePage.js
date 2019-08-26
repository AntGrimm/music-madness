import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <>
        <div>This is my home page!</div>
        <main>
          <ul>
            <li>
              <Link to="/threeDoorsDown">Three Doors Down</Link>
            </li>
            <li>
              <Link to="/rollingStones">The Rolling Stones</Link>
            </li>
            <li>
              <Link to="/beatles">The Beatles</Link>
            </li>
          </ul>
        </main>
      </>
    )
  }
}

export default HomePage
