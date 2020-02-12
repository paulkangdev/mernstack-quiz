var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// allowing the Question to have the ID of the containing quiz will allow easier retrieval of all questions that 'belong' to that quiz... at least in theory

var QuestionSchema = new Schema({
    questionText: String,
    answerOne: String,
    answerTwo: String,
    answerThree: String,
    answerFour: String,
    correctAnswer: String,
    containingQuiz: {type: Schema.Types.ObjectId, ref: 'QuizModel' }
});

var questionModel = mongoose.model('QuestionModel', QuestionSchema);
module.exports = questionModel;