import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteQuizButton extends Component {
    removeQuiz = () => {
        if (this.props.currentQuiz === this.props.deleteKey){
            return;
        }
        axios.delete('http://localhost:3001/quiz/deleteQuiz', {
            data: {
                id: this.props.deleteKey,
            },
         }
         )
         .then(()=>{
             this.props.updateQuizDB()
         });
    }

    render() {
        const {children} = this.props;
        return (
            children({
                removeQuiz: this.removeQuiz
                })
        )
    }
}
