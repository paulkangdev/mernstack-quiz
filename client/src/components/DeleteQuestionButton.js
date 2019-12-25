import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteQuestionButton extends Component {
    removeQuestion = () => {
        
        axios.delete('', {
            data: {
                id: this.props.deleteKey,
            },
         });
    }

    render() {
        const {children} = this.props;
        return children({
            removeQuestion: this.removeQuestion
        });
    }
}
