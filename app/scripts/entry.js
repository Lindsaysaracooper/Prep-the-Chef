import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import App from './components/app';
import Homepage from './components/homepage';


const router = (
<Router history = {hashHistory}>
  <Route path="/" component ={App}>
  <IndexRedirect to= "/home"/>
  <Route path ="/home" component={Homepage}/>
    <Route path="/login" component={Login}/>
  </Route>
</Router>
  )
ReactDOM.render(router,document.querySelector('.container'));


// <Route path ="/whatever" component ={whatever}/>
