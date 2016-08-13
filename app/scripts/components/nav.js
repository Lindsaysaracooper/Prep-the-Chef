import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import Login from './login';
import About from './about';


// add route navigation. when this is clicked go here
// Add if statements for login and logout

export default React.createClass({

  goToLoginHandler: function (e){
    hashHistory.push('/login');
    console.log("I have been clicked");
    // push navigation to /login
  },
  goToAboutHandler: function (e){
    hashHistory.push('/about');
    // push navigation to /login
  },
  goToHomeHandler: function (e){
    hashHistory.push('/home');
    // push navigation to /login
  },
  goToDashboardHandler: function (e){
    hashHistory.push('/dashboard');
    // push navigation to /login
  },
render:function(){
  return(
    <nav>
      <img src="http://wisushi.com/img/chef-icon-bottom-menu.png" alt="Chef Logo" />
      <input id="aboutButton"
        class="navButton"
        type="button"
        name="about"
        value="ABOUT"
        onClick={this.goToAboutHandler}/>
      <input id="searchButton"
        class="navButton"
        type="button"
        name="search"
        value="SEARCH"
        onClick={this.goToHomeHandler}/>
      <input id="dashboardButton"
        class="navButton"
        type="button"
        name="button"
        value="DASHBOARD"
        onClick={this.goToDashboardHandler}/>
      <input id="loginButton"
        class="navButton"
        type="button"
        name="login"
        value="LOGIN"
        onClick={this.goToLoginHandler} />

      <input id="logoutButton"
        class="navButton"
        type="button"
        name="logout"
        value="LOGOUT"
        onClick={this.goToHomeHandler}/>
    </nav>

  )
}

});
