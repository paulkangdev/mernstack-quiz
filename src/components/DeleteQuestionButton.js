import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteQuestionButton extends Component {
    removeQuestion = () => {
        console.log("removequestion?");
        axios.delete('http://localhost:3001/question/deleteQuestion', {
            data: {
                id: this.props.deleteKey,
            },
         }
         )
         .then((res)=>{
            this.props.updateDisplay();
        }
        );
     
    }

    render() {
        const {children} = this.props;
        return children({
            removeQuestion: this.removeQuestion
        });
    }
}
