var express = require('express');
var router = express.Router();
const Quiz = require('../models/quizModel');

router.get('/getQuiz', (req, res) => {
    Quiz.find((err, quiz) => {
      if (err) return res.json({ success: false, error: err });
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
    console.log(req.body);
    Quiz.findOneAndRemove({ _id:id }, (err) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  router.post('/newQuiz', (req, res) => {
    let quiz = new Quiz();
    
    const { id, name } = req.body;
    
    if ((!id && id !== 0) || !name) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    quiz.name = name;
    quiz.id = id;
    console.log(quiz.name, quiz.id);
    quiz.save((err) => {
      if (err) return res.json({ success: false, error: err });
        console.log("We savin'");
      return res.json({ success: true });
    });
  });


  module.exports = router;