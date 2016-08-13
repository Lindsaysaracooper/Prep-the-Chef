import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRedirect, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import App from './components/app';
import Homepage from './components/homepage';
import Login from "./components/login";
import About from './components/about';
import Dashboard from './components/dashboard';


const router = (
<Router history = {hashHistory}>
  <Route path="/" component ={App}>
  <IndexRedirect to= "/home"/>
  <Route path ="/home" component={Homepage}/>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Route>
</Router>
  )
ReactDOM.render(router,document.querySelector('.container'));


// <Route path ="/whatever" component ={whatever}/>
