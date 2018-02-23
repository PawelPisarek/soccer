import React, { Component } from 'react'
import Player from '../Player'
import './style.css'

const data = [
  [1, 0.506, 0.648],
  [2, 0.253, 0.433],
  [5, 0.339, 0.445],
  [7, 0.396, 0.569],
  [8, 0.271, 0.583],
  [9, 0.307, 0.187],
  [10, 0.431, 0.213],
  [12, 0.71, 1.045],
  [13, 0.2, 0.259],
  [14, 0.272, 0.259],
  [15, 0.477, 0.379],
]

class Field extends Component {
  render() {
    return (
      <div className="field">
        {data.map(([playerId, x, y]) => (
          <Player
            key={playerId}
            {...{playerId, x, y}}
          />
        ))}
      </div>
    )
  }
}

export default Field
