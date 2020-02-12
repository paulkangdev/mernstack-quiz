var express = require('express');
var router = express.Router();
const Quiz = require('../src/models/quizModel');
const Question = require('../src/models/questionModel')

router.get('/getQuiz', (req, res) => {
    Quiz.find((err, quiz) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, quiz: quiz });
    });
  });
  
  router.get('/getQuizById', (req, res) => {
    console.log(req.query);
    let id=req.query.id;
    Quiz.findById(id, (err, quiz) => {
      if (err) return res.json({ success: false, error: err });
      console.log(res);
      return res.json({ success: true, quiz: quiz });
    });
  });

  router.post('/updateQuiz', (req, res) => {
    const { id, update } = req.body;
    Quiz.findOneAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
  router.delete('/deleteQuiz', (req, res) => {
    const { id } = req.body;
    return Quiz.findOneAndDelete({ _id:id }, (err) => {
     
      if (err) {
        return res.send(err);
      } else { 
        return res.json({ success: true });
      }
      
    });
    
   
  });
  
  router.post('/newQuiz', (req, res) => {
    var quiz = new Quiz();
    
    const { quizName, id } = req.body;
   
    quiz.name = quizName;
    quiz.id = id;
    
    quiz.save((err,quiz) => {
      if (err) return res.json({ success: false, error: err });
     else {
       return res.json({success: true, quiz: quiz});
      }
    });
    
    // var question = new Question();

    // const { 
    //   questionText, 
    //   answerOne,
    //   answerTwo,
    //   answerThree,
    //   answerFour,
    //   correctAnswer,
    // } = req.body;
      
    // question.questionText = questionText;
    // question.answerOne = answerOne;
    // question.answerTwo = answerTwo;
    // question.answerThree = answerThree;
    // question.answerFour = answerFour;
    // question.correctAnswer =  correctAnswer;
    // question.containingQuiz = quiz._id;

    // question.save((err) => {
    //   if (err) return res.json({ success: false, error: err });
    
    // });

  });


  module.exports = router;