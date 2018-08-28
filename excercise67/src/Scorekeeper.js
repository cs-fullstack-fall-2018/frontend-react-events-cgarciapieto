import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Scorekeeper extends Component {
    constructor(props){
        super(props);
        this.state = {displayScore: this.props.scorecounter}
    }
    buttonClick = () =>{
        this.setState(
            {
                displayScore: this.state.displayScore + 1
            }
        )
    };



    render() {



        return (
            <div className="Score">


                <button onClick = {this.buttonClick}>Press</button>
                <h1> {this.state.displayScore}</h1>
            </div>
        );
    }
}

export default Scorekeeper;
