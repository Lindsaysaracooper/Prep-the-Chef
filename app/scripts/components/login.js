import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import store from '../store';
import { Link,} from 'react-router'


// i want the login to show up when the login button is clicked, modal over the main page
export default React.createClass({
//   getInitialState: function(){
//     return{};
//   },
//   updateState: function(){
//
//     this.setState(store.session.toJSON());
//   },
//   componentDidMount: function (){
//     store.session.on('change', this.updateState);
//
//   },
//   componentWillUnmount:function(){
//     store.session.off('change',this.updateState)
//   },
//
//
//
//   loginSubmitHandler: function (e){
//       e.preventDefault();
//       let username = this.refs.username.value;
//       let password = this.refs.password.value;
//       let data={
//         username:username,
//         password:password
//       };
// store.session.login(data);
//   },
  render: function(){

    return(
      <div className="loginWhole">
      	<div className="loginSignup">
      		<h1>LOG IN</h1>
          <form onSubmit= {this.loginSubmitHandler}>
      		<span className="loginWords">USERNAME</span>
      		<input className="inputField" type="text" placeholder="type here" ref="username"/>
      			<span className="loginWords">PASSWORD</span>
      		<input className="inputField" type="text" placeholder="type here" ref="password"/>
      		<input className="inputField" type="button" name="send" value="SEND"/>
          </form>
        </div>

      	<p>
      		Haven't signed up yet? Fill out below:
      	</p>
      	<div className="loginSignup">
      		<h1>SIGN UP</h1>
          <form onSubmit={this.loginSubmitHandler}>
      		<span className="loginWords">USERNAME</span>
      		<input className="loginSend" type="text" placeholder="type here" ref="username"/>
      			<span className="loginWords">PASSWORD</span>
      		<input className="inputField" type="text" placeholder="type here" ref="password"/>
      		<input className="signupSend" type="button" name="send" value="SEND"/>
      		<input id ="loginBack" type="button" name="back" value="BACK"/>
          </form>
      	</div>
        </div>

    )
  }




});
