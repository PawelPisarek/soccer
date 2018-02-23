import React, { Component } from 'react'
import Player from '../Player'
import './style.css'

class Field extends Component {

  render() {
    return (
      <div className="field">
        {this.props.data.map(([playerId, x, y]) => (
          <Player key={playerId} {...{ playerId, x, y }} />
        ))}
      </div>
    )
  }
}

export default Field
