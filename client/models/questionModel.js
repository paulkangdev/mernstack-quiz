var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    questionText: String,
    // answerList: [Answer]
});

var questionModel = mongoose.model('QuestionModel', QuestionSchema);
module.exports = questionModel;