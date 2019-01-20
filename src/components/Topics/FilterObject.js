import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor () {
        super();

        this.state = {
            unfilteredArray: [
                {
                name: 'Harriet',
                breed: 'Shiba Inu',
                age: 5
                },
                {
                name: 'Kirby',
                furColor: 'Tricolor',
                attitudeLevel: 10
                },
                {
                name: 'Piper',
                breed: 'Unknown'
                },
                {
                name: 'Eddie',
                movieStar: true,
                furColor: 'White and Brown'
                }
            ],
            userInput: "",
            filteredArray: []
        }
    }

takeChange (value) {
    this.setState ({ userInput: value });
}

filterTheArray (prop) {
    let unfilteredArray = this.state.unfilteredArray;
    let filteredArray = [];

    for (let i=0;i<unfilteredArray.length;i++) {
        if (unfilteredArray[i].hasOwnProperty(prop)) {
            filteredArray.push(unfilteredArray[i]);
        }
    }
    console.log(filteredArray);
    this.setState = ({filteredArray: filteredArray});
}

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray) }</span>
        <input className="inputLine" onChange={ (event) => this.takeChange(event.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterTheArray(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered:{ JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}