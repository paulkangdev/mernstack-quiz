import React from 'react';
import QuestionCreator from './QuestionCreator';

class QuizCreator extends React.Component {
    render() {
        return ( 
            <div>
            <h1>Quiz Creator</h1>
            <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="Please Title Your Quiz"
            style={{ width: '200px' }}
            />
            <QuestionCreator />
            <QuestionCreator />
            <QuestionCreator />
            <QuestionCreator />
            <QuestionCreator />
            <button>Submit Quiz to Database</button>
            </div>
        );
    };
}


export default QuizCreator;
