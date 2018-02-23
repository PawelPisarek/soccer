import React, { Component } from 'react'
import { Observable } from 'rxjs/Rx'
import Player from '../Player'
import allData from '../data/data'
import './style.css'

const playerPositions = allData.player_positions

var observable = Observable.interval(10)
  .take(playerPositions.length)
  .map(data => playerPositions[data])

class Field extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    observable.subscribe(data => this.setState({ data }))
  }

  render() {
    return (
      <div className="field">
        {this.state.data.map(([playerId, x, y]) => (
          <Player key={playerId} {...{ playerId, x, y }} />
        ))}
      </div>
    )
  }
}

export default Field
