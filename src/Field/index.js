import React, { Component } from 'react'
import Player from '../Player'
import './style.css'

class Field extends Component {

  render() {
    return (
      <div className="field">
        {this.props.data ? this.props.data.map(([playerId, x, y]) => (
          <Player key={playerId} {...{ playerId, x, y }} />
        )) : null}
      </div>
    )
  }
}

export default Field
