import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <>
        <main className="home-page-main">
          <div className="home-page-title">This is my home page!</div>
          <ul className="home-page-list">
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
