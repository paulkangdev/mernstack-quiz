var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerText: String,
    isCorrect: Boolean
});

var answerModel = mongoose.model('AnswerModel', AnswerSchema);
module.exports = answerModel;