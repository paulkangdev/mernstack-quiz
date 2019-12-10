var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    name: String
});

var QuestionModel = mongoose.model('QuestionModel', QuestionSchema);
module.exports = QuestionModel;