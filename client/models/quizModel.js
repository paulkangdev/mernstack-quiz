var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    id: Number,
    name: String,
    // questionList: [Question]
});

var quizModel = mongoose.model('QuizModel', QuizSchema);
module.exports = quizModel;