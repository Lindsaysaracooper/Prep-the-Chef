import store from '../store';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { Link,} from 'react-router'
import login from './login';


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
store.session.signup(data);
  },
  render: function(){
    if(this.state.authtoken){
      hashHistory.push('/searchPage');
  }
return(
<div className="login">

      <h1 className="loginTxt"> Sign Up </h1>
<form onSubmit= {this.submitHandler}>
<p> Haven't joined but want to? Sign up below.</p>
  <input type="text" placeholder="username" ref="username"/>
  <input type="password" placeholder="password" ref="password"/>
  <input type="submit" value="Submit"/>
  <p> Already have a login? Go <Link to="/" > HERE </Link></p>

</form>
</div>
)
}
});
