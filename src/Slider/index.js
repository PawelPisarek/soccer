import React, { Component } from 'react'
import './style.css'

class Slider extends Component {
  handleChange = e => {
    this.props.setCounter(e.target.value)
  }
  render() {
    const { max } = this.props

    return (
      <div>
        <input
          onChange={this.handleChange}
          className="slider"
          type="range"
          min="0"
          max={max}
        />
      </div>
    )
  }
}

export default Slider
