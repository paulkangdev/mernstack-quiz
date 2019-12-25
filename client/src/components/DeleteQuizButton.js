import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteQuizButton extends Component {
    removeQuiz = () => {
        
        axios.delete('http://localhost:3001/quiz/deleteQuiz', {
            data: {
                id: this.props.deleteKey,
            },
         });
    }

    render() {
        const {children} = this.props;
        return children({
            removeQuiz: this.removeQuiz
        });
    }
}
