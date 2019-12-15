import React, { Component } from 'react'
import QuestionCreator from './QuestionCreator'
import axios from 'axios';

export default class QuizCreatorDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            questionList: ['T', 'B']
        };
    }

    getQuestionsFromDB(currentQuiz) {
        axios.get('http://localhost:3001/question/getQuestions', 
        { containingQuiz: {currentQuiz}})
        .then((question)=>this.setState({ questionList: question.data.matches }));
    }

    componentDidMount() {
        this.getQuestionsFromDB(this.props.currentQuiz);
        console.log("we proppin'");
    }

    render() {
        const { currentQuiz} = this.props;
        const { questionList } = this.state;
        const displayQuestions = questionList.map((question)=> {
            return (
                <li style={{ listStyleType: 'none' }}><h4>{question}</h4></li>
            )
        }) 
        return (
            <div>
                {displayQuestions}

                <QuestionCreator />
            </div>
        )
    }
}
