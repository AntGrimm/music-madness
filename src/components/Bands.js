import React, { Component } from 'react'
import data from './data/bands.json'
import { Link } from 'react-router-dom'

export class Bands extends Component {
  state = {
    category: {
      tagline: '',
      albums: []
    },
    wasFound: true
  }

  componentDidMount() {
    const currentSelection = data.bands[this.props.match.params.category]
    if (currentSelection) {
      this.setState({
        category: currentSelection
      })
    } else {
      this.setState({
        wasFound: false
      })
    }
  }

  render() {
    return (
      <>
        {this.state.wasFound ? (
          <>
            <header>{this.state.category.tagline}</header>
            <main>
              <ul>
                {this.state.category.albums.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={`/${this.props.match.params.category}/${item.title}`}
                      >
                        <img src={item.image} />
                        <h3>{item.title}</h3>
                        <h3>{item.year}</h3>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </main>
          </>
        ) : (
          <h3>Category not found</h3>
        )}
      </>
    )
  }
}

export default Bands
