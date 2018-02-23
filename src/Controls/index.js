import React, { Component } from 'react'
import Field from '../Field'
import Slider from '../Slider'
import allData from '../data/data'

const playerPositions = allData.player_positions

class Controls extends Component {
  state = {
    data: [],
    counter: 0,
    playing: true,
  }

  interval = 10

  componentDidMount() {
    this.play()
  }

  play = () => {
    this.setState({ counter: this.state.counter + 1, playing: true })
    this.setData(playerPositions[this.state.counter])
    this.playing = setTimeout(this.play, this.interval)
  }

  setData = data => this.setState({ data })

  stop = () => {
    clearTimeout(this.playing)
    this.setState({ playing: false })
  }

  unpause = () => {
    this.interval = 10
    this.play()
  }

  setCounter = value => {
    this.setState({
      counter: Number(value),
    })
  }

  render() {
    return (
      <div>
        {this.state.playing ? (
          <button onClick={this.stop}>pause</button>
        ) : (
          <button onClick={this.unpause}>run</button>
        )}
        <Field data={this.state.data} />
        <Slider max={playerPositions.length} setCounter={this.setCounter} />
      </div>
    )
  }
}

export default Controls
