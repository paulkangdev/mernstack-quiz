import React, {Component} from 'react';
import MainPage from './pages/MainPage';
import FrontPage from './pages/FrontPage';
import QuizPlayer from './pages/QuizPlayer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = () => (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/main" component={MainPage} />
          <Route path="/play/:id" component={QuizPlayer} />
          
        </Switch>
        </div>
      </Router>    
);


export default App;


