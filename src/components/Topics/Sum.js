import React, { Component } from 'react'

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  inputNumber1(value) {
    this.setState({
      number1: parseInt(value)
    });
  }

  inputNumber2(value) {
    this.setState({
      number2: parseInt(value)
    });
  }

  addNumbers(number1, number2) {
    var copySum = number1 + number2
    console.log(copySum);

    this.setState({ sum: copySum })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" placeholder="Number 1"
          onChange={(event) => this.inputNumber1(event.target.value)}></input>

        <input className="inputLine" placeholder="Number 2"
          onChange={(event) => this.inputNumber2(event.target.value)}></input>

        <button className="confirmationButton" onClick={() => this.addNumbers(this.state.number1, this.state.number2)}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum} </span>
      </div>
    )
  }
}