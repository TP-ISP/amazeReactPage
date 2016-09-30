import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Index from './Home';
import {Router, Route, hashHistory} from 'react-router';
import List from './List';
import Recent from './Recent';




//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/list" component={List}/>
    <Route path="/recent" component={Recent}/>
  </Router>,
  document.getElementById('amaze')
);
