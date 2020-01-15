import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom';
import axios from 'axios';

class QuizPlayer extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        currentQuiz: 0,
        quizzes: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        quizCreatorDisplay: false,
      };
      this.getQuizFromDb = this.getQuizFromDb.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    

    componentDidMount() {
        this.getQuizFromDb();
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
        .then((quiz) => quiz.json())
        .then((res) => this.setState({ quizzes: res.quiz }));
        
    };

  render() {
      console.log(this.props.match);
        return(
            <>        
                <h1>{this.props.match.id}Potatoes</h1>
            </>    
        );
    }   
}

export default QuizPlayer;
