import React, {Component} from 'react';
import AnswerCreator from './AnswerCreator';
import axios from 'axios';

class QuestionCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfQuestions: 0,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkIfQuestionHasName = this.checkIfQuestionHasName.bind(this);
        this.checkIfCorrectAnswerExists = this.checkIfCorrectAnswerExists.bind(this);
        this.resetInputValues = this.resetInputValues.bind(this);
    }

    handleInputChange(event) {
        
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value,
          currentQuiz: this.props.currentQuiz
        })
        
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!this.checkIfCorrectAnswerExists() || !this.checkIfQuestionHasName()){
            return;
        }
            const data = {
                key: this.props.currentQuiz,
                questionText: this.state.questionText,
                answerOne: this.state.answerOne,
                answerTwo: this.state.answerTwo,
                answerThree: this.state.answerThree,
                answerFour: this.state.answerFour,
                correctAnswer: this.state.correctAnswer,
                containingQuiz: this.props.currentQuiz,
            };
            axios.post('http://localhost:3001/question/newQuestion', data)
            .then((response => {
                // let newNum = this.state.numberOfQuestions + 1;
                // this.setState({numberOfQuestions: newNum});
                this.resetInputValues();
                this.props.updateDisplay();
            }));
        
    }

    checkIfCorrectAnswerExists(){
        if(!this.state.correctAnswer || this.state.correctAnswer === ''){
            window.alert("Need to designate a correct answer!")
            return false;
        } else{
            return true;
        }
    }

    checkIfQuestionHasName(){
        if(!(this.state.questionText) || this.state.questionText===''){
            window.alert("Need to ask a question!");
            return false;
        } else{
            return true;
        }
    }

    resetInputValues(){
        var inputs = document.querySelectorAll('input');
        var inputsArray = [].slice.call(inputs);
        for(var i=0; i<inputsArray.length;i++){
            inputsArray[i].value = '';
                if(inputsArray[i].type==='radio'){
                    inputsArray[i].checked=false;
                }
            this.setState({[inputsArray[i].name]: inputsArray[i].value});
        }
        return;
    }
    render() {
     return(
         <>
        <div className="questionText"><input 
            type="text" 
            onChange={this.handleInputChange} 
            name="questionText" 
            placeholder="Enter your QUESTION here!" 
        />
        </div>
        <div className="answer">
            <input name="answerOne"
                type="text" 
                onChange={this.handleInputChange} 
                placeholder="Enter your ANSWER here!" 
                
            />
                Correct answer <input type="radio" name="correctAnswer" value="answerOne" onChange={this.handleInputChange}></input> 
           
        </div>
        <div className="answer">
            <input name="answerTwo"
                type="text" 
                onChange={this.handleInputChange} 
                placeholder="Enter your ANSWER here!" 
            />
                Correct answer <input type="radio" name="correctAnswer" value="answerTwo" onChange={this.handleInputChange}></input> 
           
        </div>
        <div className="answer">
            <input name="answerThree"
                type="text" 
                onChange={this.handleInputChange} 
                placeholder="Enter your ANSWER here!" 
            />
                Correct answer <input type="radio" name="correctAnswer" value="answerThree" onChange={this.handleInputChange}></input> 
          
        </div>
        <div className="answer">
            <input name="answerFour"
                type="text" 
                onChange={this.handleInputChange} 
                placeholder="Enter your ANSWER here!" 
            />
              Correct answer <input type="radio" name="correctAnswer" value="answerFour" onChange={this.handleInputChange}></input> 
        </div>
            <button type="submit" onClick={this.handleSubmit}>Submit Question</button>
    </>
     );
    }
}
export default QuestionCreator;
