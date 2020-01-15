import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom';
import axios from 'axios';
import QuizPlayDisplay from '../components/QuizPlayDisplay';

class QuizPlayer extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentQuiz: this.props.match.params.id,
        };
      this.getQuizFromDb = this.getQuizFromDb.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.getQuestionsFromDb = this.getQuestionsFromDb.bind(this);
      this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        this.getQuizFromDb();
        this.getQuestionsFromDb();
    }

    getQuizFromDb = () => {
        console.log(this.props.match.params.id);
        let quizId = this.props.match.params.id;
        axios.get('http://localhost:3001/quiz/getQuizById', 
            {
                params: {
                    id: quizId,
                }
            })
        .then((res) => {
            this.setState({
                name: res.data.quiz.name,
            });
        });
    };

    getQuestionsFromDb = () => {
        axios.get('http://localhost:3001/question/getQuestions',
        {
            params: {
                containingQuiz: this.props.match.params.id,
            }
        })
        .then((res) => {
            this.setState({
                questionsList: res.data.questions,
            });
        });
    }
    updateList(questionsList) {
        questionsList=this.state.questionsList;
        questionsList.shift();
        this.setState({
            questionsList: questionsList
        })
    }

  render() {
      var questionsList = this.state.questionsList;
        return(
            <>        
                <QuizPlayDisplay 
                    currentQuiz={this.state.name}
                    questionsList={questionsList} 
                    updateList={this.updateList}
                >
                </QuizPlayDisplay>
            </>    
        );
    }   
}

export default QuizPlayer;
