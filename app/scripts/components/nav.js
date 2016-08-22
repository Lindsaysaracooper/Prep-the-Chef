import React from 'react';
import {Router, Link, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import Login from './login';
import About from './about';
import store from './../store';
import BurgerMenu from 'react-burger-menu';



export default React.createClass({
    getInitialState: function(){
      return{authtoken: store.session.get('authtoken')}
    },
    updateState: function(){

      this.setState({authtoken: store.session.get('authtoken')});
    },
    componentDidMount: function (){
      store.session.on('change', this.updateState);
    },
    componentWillUnmount:function(){
      store.session.off('change',this.updateState)
    },

    logoutButton:function(){
      store.session.logout();
    },


render:function(){
  let styles={


  };
  // let loggedInNav;
    if(this.state.authtoken){

    // return(
    //   loggedInNav=[
    //     <Link className ="navButton" id ="logoutButton"to = "/home">Logout</Link>,
    //     <Link className ="navButton" id ="dashboardButton" to = "/dashboard">Dashboard</Link>
    //   ])
    return (
      <nav>
        <img src="http://wisushi.com/img/chef-icon-bottom-menu.png" alt="Chef Logo" />
        <Link className ="navButton"
        id ="logoutButton"
        onClick ={this.logoutButton}
        to = "/home">Logout</Link>
        <Link className ="navButton" id ="aboutButton" to = "/about">Learn More</Link>
        <Link className ="navButton" id ="dashboardButton" to = "/dashboard">Dashboard</Link>
        <Link className ="navButton" id ="searchButton"to = "/home">Search</Link>
      </nav>
    )
    }else{

  return(
    <nav>
      <img src="http://wisushi.com/img/chef-icon-bottom-menu.png" alt="Chef Logo" />

      <Link className ="navButton" id ="aboutButton" to = "/about">Learn More</Link>

    </nav>

  )
}
}

});


// <Link className ="navButton" id ="loginButton"to = "/home/login">Login</Link>
// <Link className ="navButton" id ="searchButton"to = "/home">Search</Link>
