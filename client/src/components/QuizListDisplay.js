import React, { Component } from 'react'
import DeleteQuizButton from './DeleteQuizButton';
import styled from 'styled-components';
import {
    Link,
} from 'react-router-dom';

export default class QuizListDisplay extends Component {
    render() {
        const {quizzes, currentQuiz} = this.props;
        return (
            quizzes.map(quiz => (
                <div>
                    <QuizInList key={quiz._id} currentQuiz={currentQuiz}>
                        <div>
                            <span>{quiz.name}</span>
                        </div>
                        <div>
                        <Link to={`/play/${quiz._id}`}>
                            <button>Play this Quiz!</button>
                        </Link>
                        
                        <DeleteQuizButton deleteKey={quiz._id} currentQuiz={currentQuiz} updateQuizDB={this.props.updateQuizDB}>
                            { ({removeQuiz}) => (
                                <>
                                <button onClick={removeQuiz}>Delete</button>
                                </>
                                )
                            }
                        </DeleteQuizButton>
                        </div>
                    </QuizInList>
                </div>
                )        
            )
            
        );
    }
}
    
const QuizInList = styled.li`
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    height: 1rem;
    justify-content: space-between;
    list-style:none;
    margin: 5px;
    padding: 10px;
    text-decoration: none;
    > div{
    
        > span{
            color: blue;
       }
    }
`;