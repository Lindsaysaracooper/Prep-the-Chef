import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import store from '../store';
import { Link,} from 'react-router'


// i want the login to show up when the login button is clicked, modal over the main page
export default React.createClass({
  getInitialState: function(){
    return{};
  },
  updateState: function(){

    this.setState(store.session.toJSON());
  },
  componentDidMount: function (){
    store.session.on('change', this.updateState);

  },
  componentWillUnmount:function(){
    store.session.off('change',this.updateState)
  },

  submitHandler: function (e){
      e.preventDefault();
      let data={
        username:this.refs.username.value,
        password:this.refs.password.value
      };
store.session.login(data);
  },
  signUpSubmitHandler: function (e){
      e.preventDefault();
      let data={
        username:this.refs.signUpUsername.value,
        password:this.refs.signUpPassword.value
      };
store.session.signup(data);
  },
  shouldComponentUpdate:function(newProps, newState){
    if(newState.authtoken){
      hashHistory.push('/home');
    // }
    return false;
    }else {
      return true;
    }
  },
  render: function(){

    return(
      <div className="loginWhole">
      	<div className="loginSignup">
      		<h1>LOG IN</h1>
      		<span className="loginWords">USERNAME</span>
      		<input className="inputField" type="text" placeholder="type here" ref="username"/>
      			<span className="loginWords">PASSWORD</span>
      		<input className="inputField" type="password" placeholder="type here" ref="password"/>
      		<input className="inputField"
          type="button"
          name="send"
          value="SEND"
          onClick={(this.submitHandler)}/>

        </div>

      	<p>
      		Haven't signed up yet? Fill out below:
      	</p>
      	<div className="loginSignup">
      		<h1>SIGN UP</h1>

      		<span className="loginWords">USERNAME</span>
      		<input className="loginSend" type="text" placeholder="type here" ref="signUpUsername"/>
      			<span className="loginWords">PASSWORD</span>
      		<input className="inputField" type="password" placeholder="type here" ref="signUpPassword"/>
      		<input className="signupSend"
          type="button"
          name="send"
          value="SEND"
          onClick= {(this.signUpSubmitHandler)}
          />
          <p></p>
          <Link id ="loginBack" to = "/home"> BACK </Link>

      	</div>
        </div>

    )
  }




});
