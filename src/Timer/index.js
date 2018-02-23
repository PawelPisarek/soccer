import React, { Component } from 'react'

class Timer extends Component {
  formatTime = (ms) => new Date(ms).toISOString().slice(11, -1)

  render() {
    const { time } = this.props
    return <div>{this.formatTime(time)}</div>
  }
}

export default Timer
