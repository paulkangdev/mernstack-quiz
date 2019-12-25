import React, { Component } from 'react'
import DeleteQuestionButton from './DeleteQuestionButton';
import styled from 'styled-components';

export default class QuestionListDisplay extends Component {
    render() {
        const {questions} = this.props;
        
        return (
            questions.map(question => (
                <div>
                    <QuestionInList key={question._id}>
                        <div>
                            <span>{question.name}</span>
                        </div>
                        <div>
                        
                        <button>FakeEdit</button>
                        <DeleteQuestionButton deleteKey={question._id}>
                            { ({removeQuestion}) => (
                                <>
                                <button>FakeDelete</button>
                                </>
                                )
                            }
                        </DeleteQuestionButton>
                        </div>
                    </QuestionInList>
                </div>
                )        
            )
            
        );
    }
}



    
const QuestionInList = styled.li`
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