const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
const dbRoute = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-sandbox-398nw.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology:true });

let db = mongoose.connection;
db.once('open', () => console.log('connected successfully'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log(db);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

var quizRouter = require('./routes/quizRouter');
var questionRouter = require('./routes/questionRouter');
var answerRouter = require('./routes/answerRouter');



app.use('/answer', answerRouter);
app.use('/quiz', quizRouter);
app.use('/question', questionRouter);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
