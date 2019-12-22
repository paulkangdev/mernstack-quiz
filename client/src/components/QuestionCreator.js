import React, {Component} from 'react';
import AnswerCreator from './AnswerCreator';
import axios from 'axios';

class QuestionCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event, quizID) {
        event.preventDefault();
        
        const data = {
            questionText: this.state.questionText,
            answerOne: this.state.answerOne,
            answerTwo: this.state.answerTwo,
            answerThree: this.state.answerThree,
            answerFour: this.state.answerFour,
            correctAnswer: this.state.correctAnswer,
            containingQuiz: this.props.currentQuiz,
        };
        
        axios.post('http://localhost:3001/question/newQuestion', data);
    
    }
    
    render() {
        
     return(
         <>
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
            
            <button type="submit" onClick={this.handleSubmit}>Submit Question</button>
       
    </>
     );
    }
}
export default QuestionCreator;
