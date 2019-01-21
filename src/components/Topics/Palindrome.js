import React, { Component } from 'react'

export default class Palindrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(value) {
    this.setState({
      userInput: value
    });
  }

  determinePalindrome(userInput) {
    var forward = userInput;
    var backward = userInput;

    backward = backward.split("");
    backward = backward.reverse();
    backward = backward.join("");

    if (forward === backward) {
      this.setState({ palindrome: 'True' });
    } else {
      this.setState({ palindrome: 'False' });
    }
    console.log(this.state.palindrome);
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.determinePalindrome(this.state.userInput)}
        >Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}