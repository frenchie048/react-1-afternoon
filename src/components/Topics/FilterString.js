import React, { Component } from "react";

export default class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unfilteredArray: ["Frasier", "Niles", "Daphne", "Marty", "Eddie", "Roz"],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange(value) {
    this.setState = ({ userInput: value });
  }

  filterTheString(userInput) {
    let unfilteredArray = this.state.unfilteredArray;
    let filteredArray = [];

    for (let i = 0; i < unfilteredArray.length; i++) {
      if (unfilteredArray[i].includes(userInput)) {
        filteredArray.push(unfilteredArray[i]);
      }
    }

    console.log(filteredArray);
    this.setState = ({ filteredArray: filteredArray });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterTheString(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}
