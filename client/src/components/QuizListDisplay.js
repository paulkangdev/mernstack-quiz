import React, { Component } from 'react'
import DeleteQuizButton from './DeleteQuizButton';
import styled from 'styled-components';

export default class QuizListDisplay extends Component {
    render() {
        const quizzes = this.props.quizzes;
        const refresh = this.props.refresh;
        return (
            quizzes.map(quiz => (
                <div>
                    <QuizInList key={quiz._id}>
                        <div>
                            <span>{quiz.name}</span>
                        </div>
                        <div>
                        <button>Play this Quiz!</button>
                        <button>Edit</button>
                        <DeleteQuizButton deleteKey={quiz._id}>
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