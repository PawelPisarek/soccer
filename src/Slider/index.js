import React, { Component } from 'react'
import './style.css'

class Slider extends Component {
  handleChange = e => {
    this.props.setCounter(e.target.value)
  }
  render() {
    const { max, value } = this.props

    return (
      <div>
        <input
          onChange={this.handleChange}
          value={value}
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
