var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    id: Number,
    name: String,
    questionList: [{type: Schema.Types.ObjectId, ref: 'QuestionModel' }]
});

var quizModel = mongoose.model('QuizModel', QuizSchema);
module.exports = quizModel;