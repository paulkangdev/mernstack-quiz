import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom';
import styled from 'styled-components';

export default class QuizPlayDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
        }
        this.submitAnswer = this.submitAnswer.bind(this);
        this.correctAnswerSubmitted = this.correctAnswerSubmitted.bind(this);
    }

    submitAnswer(event){
        event.preventDefault();
       // quick and dirty way of checking correct answerr
            let answer=event.target.classList[0];
            if (answer===this.props.questionsList[0].correctAnswer){
                this.correctAnswerSubmitted();
            }
        this.props.updateList();
    }

    correctAnswerSubmitted(){
        this.setState(
            {score: this.state.score+10}
        )
        
    }
    
    render() {
        var list = [];
        list = this.props.questionsList;
        
        if (list){
            var remainingQuestions = list.length;
            console.log(list[0]);
        }
        return (
            <>
            <div>
                <h1>{this.props.currentQuiz}</h1>
                <p>Score:{this.state.score}</p>
                <p>Questions remaining: {remainingQuestions}</p>
            </div>
            <div>
            {remainingQuestions ? <>
                <button className="answerOne" onClick={this.submitAnswer}>{list[0].answerOne}</button>
                <button className="answerTwo" onClick={this.submitAnswer}>{list[0].answerTwo}</button>
                <button className="answerThree" onClick={this.submitAnswer}>{list[0].answerThree}</button>
                <button className="answerFour" onClick={this.submitAnswer}>{list[0].answerFour}</button>
                </>
                : <>
                You have completed the quiz!
                <p>
                    <Link to="/main">Return to Main Page</Link>
                </p>
                </> }
            </div>
            
            
            </> 
        )
    }
}
