import React, {Component} from 'react';
import QuestionCreator from './QuestionCreator';
import QuizCreatorDisplay from './QuizCreatorDisplay';
import axios from 'axios';
import Toggle from './Toggle';
import { runInThisContext } from 'vm';
import Modal from './Modal';
import Portal from './Portal';


var Question = require('../models/questionModel');
var Quiz = require('../models/quizModel');


class QuizCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            questionList: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitQuizData = this.submitQuizData.bind(this);
        this.displayQuestionCreator = this.displayQuestionCreator.bind(this);   
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    
    };

    handleSubmit(event) {
        event.preventDefault();
        this.submitQuizData();
        
    };

    displayQuestionCreator() {
    };

    submitQuizData() {
        var currentQuiz;
        const data = {
            quizName: this.state.quizName,
            questionText: this.state.questionText,
            answerOne: this.state.answerOne,
            answerTwo: this.state.answerTwo,
            answerThree: this.state.answerThree,
            answerFour: this.state.answerFour,
            correctAnswer: this.state.correctAnswer,
        };
        
        axios.post('http://localhost:3001/quiz/newQuiz', data)
        .then((response) =>{
            currentQuiz = response.data.quiz._id;
           this.setState({currentQuiz: currentQuiz});
        }, (error) => {
            console.log(error);
        });
    }
        
    
    render() {
        
        var submitted = this.state.currentQuiz;
        
        return ( 
            <>
            <h1>Quiz Creator: {this.state.quizName}</h1>
            {!submitted ? ( <>
            <input name="quizName"
                type="text" 
                onChange={this.handleInputChange}
                placeholder="Please Name Your Quiz"
                style={{ width: '200px' }}>
            </input>
            <button onClick={this.handleSubmit}>
                    Submit Quiz
            </button>
            </>
            ) : 
                <QuizCreatorDisplay currentQuiz={submitted}/>
            }
            </>
            
        );
    }
}

export default QuizCreator;