import React from 'react';
import {Link, Router, Route, hashHistory} from 'react-router';
import store from '../store';
import Searchbox from './Searchbox';
import Restaurants from '../collection/Restaurants';
import messageModal from './messageModal';


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
      store.restaurants.fetch();
    // store.restaurants.on('update change', this.updateState);
  },
  componentWillUnmount:function(){
    // store.restaurants.off('update change', this.updateState)
  },

  render: function (){
    console.log(this.state);
    let restaurants = this.state.restaurants.filter((restaurant,i,arr)=>{
        return restaurant.cuisine === this.props.location.query.term
      }).map((restaurant,i,arr)=>{
        return (
          <li key={i}>
            {restaurant.name}
            <img src={restaurant.img}/>
            {restaurant.rating}
          </li>
        )
      })

    // })//map to return  lis
    return(
      <div className="wholeSearch">
      <div className="searchResults">
      <h1>Results</h1>
      <ul className= "results">
       {restaurants}
      </ul>
      <Link
      className ="messageButton"
      to ="/search/message"> Message the Chef</Link>

      </div>

      </div>

    )
}
});
