var express = require('express');
var router = express.Router();
const Question = require('../src/models/questionModel')

router.post('/newQuestion', (req, res) => {
    let question = new Question();

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
    return res.json({success:false, questions: []}); 
     
  
  }
});

router.delete('/deleteQuestion', (req, res) => {
  const { id } = req.body;
  return Question.findOneAndDelete({ _id:id }, (err) => {
    if (err) {
      return res.send(err);
    } else { 
      return res.json({ success: true });
    }
    
  });
  
 
});


module.exports = router;