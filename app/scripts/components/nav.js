import React from 'react';
import {Router, Link, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import Login from './login';
import About from './about';
import store from './../store';



export default React.createClass({
    getInitialState: function(){
      return{};
      console.log("get initial state", this.state.authtoken);
    },
    updateState: function(){

      this.setState(store.session.toJSON());
    },
    componentDidMount: function (){
      store.session.on('change', this.updateState);
      console.log('component did mount', this.state.authtoken);
    },
    componentWillUnmount:function(){
      store.session.off('change',this.updateState)
    },


render:function(){
  console.log(this.props);
  let styles={


  };
  // let loggedInNav;
    console.log('render', this.state.authtoken);
    if(this.state.authtoken){

    // return(
    //   loggedInNav=[
    //     <Link className ="navButton" id ="logoutButton"to = "/home">Logout</Link>,
    //     <Link className ="navButton" id ="dashboardButton" to = "/dashboard">Dashboard</Link>
    //   ])
    return (
      <nav>
        <img src="http://wisushi.com/img/chef-icon-bottom-menu.png" alt="Chef Logo" />
        <Link className ="navButton" id ="logoutButton"to = "/home">Logout</Link>
        <Link className ="navButton" id ="dashboardButton" to = "/dashboard">Dashboard</Link>
        <Link className ="navButton" id ="searchButton"to = "/home">Search</Link>
        <Link className ="navButton" id ="aboutButton" to = "/about">About</Link>
      </nav>
    )
    }else{

  return(
    <nav>
      <img src="http://wisushi.com/img/chef-icon-bottom-menu.png" alt="Chef Logo" />
      <Link className ="navButton" id ="loginButton"to = "/home/login">Login</Link>
      <Link className ="navButton" id ="searchButton"to = "/home">Search</Link>
      <Link className ="navButton" id ="aboutButton" to = "/about">About</Link>

    </nav>

  )
}
}

});
