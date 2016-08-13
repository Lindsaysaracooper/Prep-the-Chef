import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import store from '../store';
import { Link,} from 'react-router'


// i want the login to show up when the login button is clicked, modal over the main page
export default React.createClass({
  render: function(){


    return(
      <div class="loginWhole">
      	<div class="loginSignup">
      		<h1>LOG IN</h1>
      		<span class="loginWords">USERNAME</span>
      		<input class="inputField" type="text" placeholder="type here"/>
      			<span class="loginWords">PASSWORD</span>
      		<input class="inputField" type="text" placeholder="type here"/>
      		<input class="inputField" type="button" name="send" value="SEND"/>
      	</div>
      	<p>
      		Haven't signed up yet? Fill out below:
      	</p>
      	<div class="loginSignup">
      		<h1>SIGN UP</h1>
      		<span class="loginWords">USERNAME</span>
      		<input class="loginSend" type="text" placeholder="type here"/>
      			<span class="loginWords">PASSWORD</span>
      		<input class="inputField" type="text" placeholder="type here"/>
      		<input class="signupSend" type="button" name="send" value="SEND"/>
      		<input id ="loginBack" type="button" name="back" value="BACK"/>
      	</div>

    )
  }




});
