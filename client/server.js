const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();

const Data = require('./src/data.js');
const Quiz = require('./models/quizModel');


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

router.get('/getData', (req, res) => {
  
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

  router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  router.delete('/deleteData', (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, (err) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });

  router.post('/putData', (req, res) => {
    let data = new Data();
    console.log("We routin'");
    
    const { id, message } = req.body;
  
    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    data.message = message;
    data.id = id;
    console.log(data.message, data.id);
    data.save((err) => {
      if (err) return res.json({ success: false, error: err });
       console.log("We savin'");
      return res.json({ success: true });
    });
  });

  app.use('/api', router);


//   var quiz_controller = require('../controllers/quizcontroller');
// var question_controller = require('../controllers/questioncontroller');

// router.get('/create', quiz_controller.quiz_create_get);

// router.post('/create', quiz_controller.quiz_create_post);

// router.get('/delete', quiz_controller.quiz_delete_get);

// router.post('/delete', quiz_controller.quiz_delete_post);

// router.get('/update', quiz_controller.quiz_update_get);

// router.post('/update', quiz_controller.quiz_update_post);

// router.get('/question/create', question_controller.question_create_get);

// router.post('/question/create', question_controller.question_create_post);

// router.get('/question/delete', question_controller.question_delete_get);

// router.post('/question/delete', question_controller.question_delete_post);

// router.get('/question/update', question_controller.question_update_get);

// router.post('/question/update', question_controller.question_update_post);

// router.get('/list', quiz_controller.quiz_list);

// router.get('/quiz/:id', quiz_controller.quiz_get);



  app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
