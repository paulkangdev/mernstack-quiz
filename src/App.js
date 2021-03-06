import React from 'react';
import MainPage from './pages/MainPage';
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
          
          <Route exact path="/" component={MainPage} />
          <Route path="/play/:id" component={QuizPlayer} />
        </Switch>
        </div>
      </Router>    
);


export default App;


