import React from 'react';
import QuizCreatorDisplay from './QuizCreatorDisplay';
import axios from 'axios';
import styled from 'styled-components';
class QuizCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            questionList: [],
            quizName: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitQuizData = this.submitQuizData.bind(this);
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
        if(this.state.quizName.trim()){
            this.submitQuizData();
        } else {
            window.alert("Please enter a name for your quiz!");
        }
        
    };

    submitQuizData() {
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
            console.log(response);
            let currentQuiz = response.data.quiz._id;
            this.props.updateQuizDB();
            this.props.updateCurrentQuiz(currentQuiz);

        }, (error) => {
            console.log(error);
        });
        
    }
    
    render() {
        
        var submitted = this.props.currentQuiz;
        
        return ( 
            <QuizWrapper>
            <h1>Quiz Creator: {this.state.quizName}</h1>
            {!submitted ? ( <>
            <input name="quizName"
                type="text" 
                onChange={this.handleInputChange}
                placeholder="Please Name Your Quiz"
                style={{ width: '40vh' }} >
            </input>
            <button onClick={this.handleSubmit}>
                    Submit Quiz
            </button>
            </>
            ) : 
                <QuizCreatorDisplay currentQuiz={submitted}/>
            }
            </QuizWrapper>
            
        );
    }
}

export default QuizCreator;

const QuizWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`