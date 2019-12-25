import React, { Component } from 'react'
import QuestionCreator from './QuestionCreator'
import axios from 'axios';

export default class QuizCreatorDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            questionList: []
        };
        this.getQuestionsFromDB = this.getQuestionsFromDB.bind(this);
    }

    getQuestionsFromDB() {
        const currentQuiz = this.props.currentQuiz;
        axios.get('http://localhost:3001/question/getQuestions', { 
            params: {
                containingQuiz: currentQuiz
            }
        })
        .then((response)=>{
            this.setState({ questionList: response.data.questions });
        });
    }

    componentDidMount() {
        this.getQuestionsFromDB();
    }
   
    render() {
        const { currentQuiz } = this.props;
        const { questionList } = this.state;
        const displayQuestions = questionList.map((question)=> {
            return (
                <li style={{ listStyleType: 'none' }}><h4>{question.questionText}</h4></li>
            )
        }) 

        return (
            <div>
                <button onClick={this.getQuestionsFromDB}>
                    Refresh Questions from Database
                </button>
                {displayQuestions}
                <QuestionCreator currentQuiz={currentQuiz}/>
            </div>
        )
    }
}
