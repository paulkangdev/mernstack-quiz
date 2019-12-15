import React, { Component } from 'react';

class QuizDisplay extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default QuizDisplay;