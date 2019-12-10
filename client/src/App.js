import React, {Component} from 'react';
import axios from 'axios';



class App extends Component {
  state = {
    quizzes: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // this will download all of the quizzes from the database and add them to this.state.quizzes array

  getDataFromDb = () => {
    fetch('http://localhost:3001/quiz/getQuiz')
      .then((quiz) => quiz.json())
      .then((res) => this.setState({ quizzes: res.quiz }));
  };

  createQuiz = (message) => {
    console.log(message);
    let currentIds = this.state.quizzes.map((quiz) => quiz.id);
    let idToBeAdded = 0;
    console.log("currentIds",currentIds);
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/quiz/newQuiz', {
      id: idToBeAdded,
      name: message,
    });
    
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.quizzes.forEach((quiz) => {
      if (quiz.id == idTodelete) {
        objIdToDelete = quiz._id;
        console.log(quiz._id);
      }
    });

    axios.delete('http://localhost:3001/quiz/deleteQuiz', {
      data: {
        id: objIdToDelete,
      },
      });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.quizzes.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/quiz/updateQuiz', {
      id: objIdToUpdate,
      update: { name: updateToApply },
    });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { quizzes } = this.state;
    return (
      <div>
        <h1>Welcome to the Quiz Factory!</h1>
        <ul>
          {quizzes.length <= 0
            ? 'No quizzes exist right now. Why don\'t you make one? \:\)'
            : quizzes.map((quiz) => (
                <li style={{ padding: '10px' }} key={quiz.id}>
                  <span style={{ color: 'gray' }}> id: </span> {quiz.id} <br />
                  <span style={{ color: 'gray' }}> data: </span>
                  {quiz.name}
                </li>
              ))}
        </ul>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button onClick={() => {this.createQuiz(this.state.message)}}>
            ADD
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default App;