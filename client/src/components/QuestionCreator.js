import React from 'react';
import AnswerCreator from './AnswerCreator';
class QuestionCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        })
        
    }

    handleSubmit(event) {
        event.preventDefault();

    }

    render() {
     return(
         <div style={{display: 'block'}}> 
             <h2>Question Creator</h2>
             <form onSubmit={this.handleSubmit}>
            <label>
             <input 
                type="text" 
                onChange={this.handleInputChange} 
                name="QuestionText" 
                placeholder="Enter your QUESTION here!" 
                style={{ width: '200px' }}
            />
            
            <div className="answer">
                <input name="answer-one"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
             
                    Is this the CORRECT answer? <input type="radio" name="correct-answer" value="answer-one" onChange={this.handleInputChange}></input> 
               
            </div>
            <div className="answer">
                <input name="answer-two"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
                
                    Is this the CORRECT answer? <input type="radio" name="correct-answer" value="answer-two" onChange={this.handleInputChange}></input> 
               
            </div>
            <div className="answer">
                <input name="answer-three"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
            
                    Is this the CORRECT answer? <input type="radio" name="correct-answer" value="answer-three" onChange={this.handleInputChange}></input> 
              
            </div>
            <div className="answer">
                <input name="answer-four"
                    type="text" 
                    onChange={this.handleInputChange} 
                    placeholder="Enter your ANSWER here!" 
                    style={{ width: '200px' }}
                />
                
                    Is this the CORRECT answer? 
                    <input type="radio" name="correct-answer" value="answer-four" onChange={this.handleInputChange}></input> 
                
            </div>

            <input type="submit" value="Submit" />
            </label>
             </form>
         </div>
     );
    }
}
export default QuestionCreator;
