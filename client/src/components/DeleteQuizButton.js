import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteQuizButton extends Component {
    removeQuiz = () => {
        if (this.props.currentQuiz === this.props.deleteKey){
            console.log("Cannot delete active quiz");
            return;
        }
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
