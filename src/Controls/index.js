import React, { Component } from 'react'
import Field from '../Field'
import Slider from '../Slider'
import Timer from '../Timer'
import allData from '../data/data'

const playerPositions = allData.player_positions
const dataInterval = allData.interval

class Controls extends Component {
  state = {
    data: [],
    counter: 0,
    playing: true,
    time: 0
  }

  interval = 10

  componentDidMount() {
    this.play()
  }

  play = () => {
    this.setState({ counter: this.state.counter + 1, playing: true })
    this.setData(playerPositions[this.state.counter])
    this.setTime()
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

  setTime = () => {
    this.setState({time: dataInterval * this.interval * this.state.counter})
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
        <Timer time={this.state.time} />
        <Slider max={playerPositions.length} value={this.state.counter} setCounter={this.setCounter} />
      </div>
    )
  }
}

export default Controls
