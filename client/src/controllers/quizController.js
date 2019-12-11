// getDataFromDb = () => {
//     fetch('http://localhost:3001/quiz/getQuiz')
//       .then((quiz) => quiz.json())
//       .then((res) => this.setState({ quizzes: res.quiz }));
//   };

//   createQuiz = (message) => {
//     console.log(message);
//     let currentIds = this.state.quizzes.map((quiz) => quiz.id);
//     let idToBeAdded = 0;
//     console.log("currentIds",currentIds);
//     while (currentIds.includes(idToBeAdded)) {
//       ++idToBeAdded;
//     }

//     axios.post('http://localhost:3001/quiz/newQuiz', {
//       id: idToBeAdded,
//       name: message,
//     });
    
//   };

//   // to remove existing database information
//   deleteFromDB = (idTodelete) => {
//     parseInt(idTodelete);
//     let objIdToDelete = null;
//     this.state.quizzes.forEach((quiz) => {
//       if (quiz.id == idTodelete) {
//         objIdToDelete = quiz._id;
//         console.log(quiz._id);
//       }
//     });

//     axios.delete('http://localhost:3001/quiz/deleteQuiz', {
//       data: {
//         id: objIdToDelete,
//       },
//       });
//   };

//   // our update method that uses our backend api
//   // to overwrite existing data base information
//   updateDB = (idToUpdate, updateToApply) => {
//     let objIdToUpdate = null;
//     parseInt(idToUpdate);
//     this.state.quizzes.forEach((dat) => {
//       if (dat.id == idToUpdate) {
//         objIdToUpdate = dat._id;
//       }
//     });

//     axios.post('http://localhost:3001/quiz/updateQuiz', {
//       id: objIdToUpdate,
//       update: { name: updateToApply },
//     });
//   };

  