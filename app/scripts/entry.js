import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRedirect, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import App from './components/app';
import Homepage from './components/homepage';
import Login from "./components/login";
import About from './components/about';
import Dashboard from './components/dashboard';
import store from './store';
import settings from './settings';
import Search from './components/search';
import MessageModal from './components/messageModal';

$(document).ajaxSend(function(evt,xhr,jquerysettings){
  // console.log(document.location);
  // xhr.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)

if (store.session.get('authtoken')){
  xhr.setRequestHeader('Authorization', `Kinvey ${store.session.get('authtoken')}`)

} else {
    xhr.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
}


});
if (localStorage.authtoken){
  store.session.set('authtoken', localStorage.authtoken)
  store.session.retrieve()
}

const router = (
<Router history = {hashHistory}>
  <Route path="/" component ={App}>
  <IndexRedirect to= "/home"/>
  <Route path ="/home" component={Homepage}>
      <Route path="login" component={Login}/>
  </Route>
      <Route path="/about" component={About}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/search" component={Search}/>
          <Route path="message" component={MessageModal}/>
      </Route>

</Router>
  )
ReactDOM.render(router,document.querySelector('.container'));


// <Route path ="/whatever" component ={whatever}/>
