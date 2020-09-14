import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Post from './Component/Post/Post';
import Nomatch from './Component/NoMatch/Nomatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDitails from './Component/Post/PostDitails/PostDitails';



function App() {    
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Post></Post>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Post></Post>
          </Route>
          <Route path="/postditails/:idNo">
              <PostDitails></PostDitails>
          </Route>
          <Route path='*'>
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
