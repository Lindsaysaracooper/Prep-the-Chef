import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';


// add route navigation. when this is clicked go here
// Add if statements for login and logout

export default React.createClass({

render:function(){
  return(
    <nav>
      <img src="http://wisushi.com/img/chef-icon-bottom-menu.png" alt="Chef Logo" />
      <input id="aboutButton" type="button" name="about" value="ABOUT"/>
      <input id="searchButton" type="button" name="search" value="SEARCH"/>
      <input id="dashboardButton"type="button" name="button" value="DASHBOARD"/>
      <input id="loginButton"type="button" name="login" value="LOGIN"/>
      <input id="logoutButton"type="button" name="logout" value="LOGOUT"/>
    </nav>

  )
}

});
