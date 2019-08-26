import React, { Component } from 'react'
import data from './data/bands.json'

export class Band extends Component {
  state = { band: {} }

  componentDidMount() {
    const selectedItem = data.bands[
      this.props.match.params.category
    ].albums.filter(item => item.title === this.props.match.params.title)[0]
    console.log(selectedItem)
    this.setState({
      band: selectedItem
    })
  }

  render() {
    return (
      <>
        <section className="album-info">
          <header>{this.props.match.params.title}</header>
          <img className="album-image" src={this.state.band.image} />
          <h3>Year Released: {this.state.band.year}</h3>
        </section>
      </>
    )
  }
}

export default Band
