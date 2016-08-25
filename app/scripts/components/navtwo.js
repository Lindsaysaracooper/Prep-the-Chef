import React from 'react';
import BurgerMenu from 'react-burger-menu';
import {Router, Link, Route, hashHistory} from 'react-router';
import store from '../store';


var Menu = require('react-burger-menu').slide;

export default React.createClass({

  // showSettings: function(event) {
  //   event.preventDefault();
  // console.log('are you there nav? its me coop');
  // },
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

  render: function() {
      if(this.state.authtoken){
    return (
      <Menu>
      <img src= "assets/photos/spoon.png"/>
      <Link className ="navButton" id ="searchButton"to = "/home">Home </Link>
      <Link className ="navButton" id ="dashboardButton" to = "/dashboard">Dashboard</Link>
        <Link className ="navButton" id ="aboutButton" to = "/about">Learn More</Link>
      <Link className ="navButton"
      id ="logoutButton"
      onClick ={this.logoutButton}
      to = "/home">Logout</Link>
      </Menu>
    )
  }else{
    return(
      <Menu>
      <nav>
        <Link className ="navButton" id ="aboutButton" to = "/about">Learn More</Link>
      </nav>
      </Menu>

    )
}
  }
});

// <img src="http://wisushi.com/img/chef-icon-bottom-menu.png" alt="Chef Logo" />
