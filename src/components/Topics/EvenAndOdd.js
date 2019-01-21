import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    userI(value) {
        this.setState({
            userInput: value
        })
    }

    updateEvenOdd() {
        const { evenArray, oddArray, userInput } = this.state;

        let newEvenArray = evenArray.slice();
        let newOddArray = oddArray.slice();

        let splitString = userInput.split(",");

        for (let i = 0; i < splitString.length; i++) {
            if (splitString[i] % 2 === 0) {
                newEvenArray.push(splitString[i])
            } else { newOddArray.push(splitString[i]) }
        }
        console.log(newEvenArray);
        console.log(newOddArray);
        this.setState({ evenArray: newEvenArray, oddArray: newOddArray })
    }

    render() {
        const { userInput } = this.state;
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>

                <input className="inputLine" onChange={(event) => { let { value } = event.target; this.userI(value) }} value={userInput} />

                <button className="confirmationButton" onClick={() => { this.updateEvenOdd(this.state.userInput) }}>Split</button>

                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}
