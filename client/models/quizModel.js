var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    name: String
});

var QuizModel = mongoose.model('QuizModel', QuizSchema);
module.exports = QuizModel;