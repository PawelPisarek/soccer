import React, { Component } from 'react'
import './style.css'

class Player extends Component {
  render() {
    const { playerId, x, y } = this.props
    const style = {
      left: x * 100 + '%',
      top: (1 - y) * 100 + '%',
    }
    return <div style={style} className="player">{playerId}</div>
  }
}

export default Player
