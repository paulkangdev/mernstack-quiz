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
        console.log("this.props", this.props);
        const currentQuiz = this.props.currentQuiz;
        axios.get('http://localhost:3001/question/getQuestions', { 
            params: {
                containingQuiz: currentQuiz
            }
        })
        .then((response)=>{
            console.log("STATE AFTER GETTING DATABASE:",             this.state);
            this.setState({ questionList: response.data.questions });

        });
    }

    componentDidMount() {
        this.getQuestionsFromDB();
        
    }
    componentWillUnmount() {
        
      };

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

                <QuestionCreator currentQuiz={this.props.currentQuiz }/>
            </div>
        )
    }
}
