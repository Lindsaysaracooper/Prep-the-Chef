import React from 'react';
import {Link, hashHistory} from 'react-router';
import store from '../store';
import Searchbox from './Searchbox';


export default React.createClass({

  getInitialState:function(){
    return{
      restaurants:[]
    };

  },

  updateState:function(){
    this.setState({restaurants:store.restaurants.toJSON()});
  },
  componentDidMount:function(){
    store.restaurants.on('update change', this.updateState);
  },
  componentWillUnmount:function(){
    store.restaurants.off('update change', this.updateState)
  },

  render: function (){
    let restaurants = this.state.restaurants.map((vote,i,arr)=>{
    return(
      <div className="searchResults">
      <h1>Results</h1>
      <ul className= "results">
      <li>
      </li>
      </ul>
      </div>
    )
  }

});
