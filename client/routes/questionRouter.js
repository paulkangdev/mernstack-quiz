var express = require('express');
var router = express.Router();
const Question = require('../src/models/questionModel')

router.post('/newQuestion', (req, res) => {
    let question = new Question();
    console.log(req.body);

    const { 
        questionText, 
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        correctAnswer,
        containingQuiz
     } = req.body;
        
    question.questionText = questionText;
    question.answerOne = answerOne;
    question.answerTwo = answerTwo;
    question.answerThree = answerThree;
    question.answerFour = answerFour;
    question.correctAnswer =  correctAnswer;
    question.containingQuiz = containingQuiz;
    
    question.save((err) => {
      if (err) return res.json({ success: false, error: err });
        console.log("We savin questions");
      return res.json({ success: true });
    });
  });

router.get('/getQuestions', (req, res) => {

  const contain = req.query.containingQuiz;
  if (contain){ 
    Question.find({containingQuiz: {$eq: contain } }, (err, matches) => {
      if(err) return res.json({success:false,error:err});
      return res.json({success:true, questions: matches});
      
    });
  } else {
    console.log("containingQuiz not defined");
    return res.json({success:false, questions: []}); 
     
  
  }
});


module.exports = router;