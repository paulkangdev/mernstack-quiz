import React from 'react';

class AnswerCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        })
        
    }

render() {
    return(
        <div>
            <input name={'answer-'+this.props.name} type="text" onChange={this.handleInputChange} placeholder="Enter your ANSWER here!" style={{ width: '200px' }}
            />
            <label>Is this the CORRECT answer? <input type="checkbox"></input> </label>
        </div>
    );
    }
}
export default AnswerCreator;