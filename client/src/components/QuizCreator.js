import React from 'react';
import QuestionCreator from './QuestionCreator';
import axios from 'axios';
import { runInThisContext } from 'vm';

var Question = require('../models/questionModel');
var Quiz = require('../models/quizModel');

class QuizCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.quizList);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    
    }

    handleSubmit(event) {
        event.preventDefault();
        let currentIds = this.props.quizList.map((quiz) => quiz.id);
        let idToBeAdded = null;
        while (currentIds.indexOf(idToBeAdded)!==-1) {
            ++idToBeAdded;
        }
        const data = {
            id: idToBeAdded,
            quizName: this.state.quizName,
            questionText: this.state.questionText,
            answerOne: this.state.answerOne,
            answerTwo: this.state.answerTwo,
            answerThree: this.state.answerThree,
            answerFour: this.state.answerFour,
            correctAnswer: this.state.correctAnswer,

        };
        console.log('props:', this.props.quizList);
        axios.post('http://localhost:3001/quiz/newQuiz', data);
    
    }
        
    render() {
        var quizList = this.props.quizList;
        console.log("rendered", quizList);
        return ( 
            <div>
            <form>
                <h1>Quiz Creator</h1>
                <input name="quizName"
                type="text" 
                onChange={this.handleInputChange}
                placeholder="Please Name Your Quiz"
                style={{ width: '200px' }}
                />
                <h2>Question Creator</h2>
            <input 
                type="text" 
                onChange={this.handleInputChange} 
                name="questionText" 
                placeholder="Enter your QUESTION here!" 
                style={{ width: '200px' }}
            />
            
            <div className="answer">
                <input name="answerOne"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
             
                    Is this the CORRECT answer? <input type="radio" name="correctAnswer" value="answerOne" onChange={this.handleInputChange}></input> 
               
            </div>
            <div className="answer">
                <input name="answerTwo"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
                
                    Is this the CORRECT answer? <input type="radio" name="correctAnswer" value="answerTwo" onChange={this.handleInputChange}></input> 
               
            </div>
            <div className="answer">
                <input name="answerThree"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
            
                    Is this the CORRECT answer? <input type="radio" name="correctAnswer" value="answerThree" onChange={this.handleInputChange}></input> 
              
            </div>
            <div className="answer">
                <input name="answerFour"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
                
                Is this the CORRECT answer? 
                    <input type="radio" name="correctAnswer" value="answerFour" onChange={this.handleInputChange}></input> 
            </div>
                
                <button value="Submit Question" type="submit" onClick={this.handleSubmit}>Create Quiz and First Question</button>
            </form>                
            </div>           
        );
    };
}

export default QuizCreator;
