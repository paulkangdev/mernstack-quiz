import React, {Component} from 'react';
import axios from 'axios';
import QuizCreator from './components/QuizCreator';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Portal from './components/Portal';
import styled from 'styled-components';

import QuizListDisplay from './components/QuizListDisplay';

class App extends Component {
  state = {
    currentQuiz: 0,
    quizzes: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    quizCreatorDisplay: false,
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  componentWillUpdate(){
    
  }
  getDataFromDb = () => {
    fetch('http://localhost:3001/quiz/getQuiz')
      .then((quiz) => quiz.json())
      .then((res) => this.setState({ quizzes: res.quiz }));
  };

  createQuiz = (message) => {
    let currentIds = this.state.quizzes.map((quiz) => quiz.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    
    axios.post('http://localhost:3001/quiz/newQuiz', {
      name: message,
    });
    
  };

updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.quizzes.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/quiz/updateQuiz', {
      
      update: { name: updateToApply },
    });
  };

  render() {
    const {quizzes} = this.state;
          
    return (
      <>
        <h1>Welcome to the Quiz Factory!</h1>
        <QuizList>
          
          {quizzes.length === 0
            ? <div><span>No quizzes exist right now. Why don't you make one? :)</span></div>
            : <QuizListDisplay quizzes={quizzes} />
          }
          
          <button onClick={this.getDataFromDb}>
            Refresh Quiz List
          </button>
        </QuizList>

        <Toggle>
          { ({on, toggle}) => (
            <>
              {!on ? 
                <button onClick={toggle}>
                  Create a Quiz
                </button>
                :
                <Modal on={on} toggle={toggle}>
                  <QuizCreator/>
                </Modal>
              }
            </>                      
          )}  
        </Toggle>
      </>    
              
    );
  }
}

export default App;

const QuizList = styled.ul`
  display: flex;
  flex-direction: column;
  margin:0 auto;
  padding: 0;
  >span {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem;
    padding: 1rem;
  }
  >button {
    border: 1px solid black;
    border-radius: 5px;
    background: white;
    margin: 5px;
    padding: 10px;
    width: 5rem; 
  }
  >button:hover {
    background: whitesmoke;
    cursor: pointer;
  }
  >button:active {
    background: black;
  }
`;

