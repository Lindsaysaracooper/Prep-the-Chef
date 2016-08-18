import React from 'react';
import {Link, Router, Route, hashHistory} from 'react-router';
import store from '../store';
import Searchbox from './Searchbox';
import Restaurants from '../collection/Restaurants';
import messageModal from './messageModal';
import RestaurantInfo from './restaurantInfo';

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
    store.restaurants.on('update change', this.updateState);
  },
  componentWillUnmount:function(){
    store.restaurants.off('update change', this.updateState)
  },

  render: function (){

    let restaurants = this.state.restaurants.filter((restaurant,i,arr)=>{
        return restaurant.Cuisine.indexOf(this.props.location.query.term) !== -1;
      }).map((restaurant,i,arr)=>{
        return (
          <RestaurantInfo restaurant={restaurant} key={i}/>
        )

      })
let cuisine = this.props.location.query.term;
    // })//map to return  lis
    return(
      <div className="wholeSearch">
      <div className="searchResults">
      <h1>{cuisine} Restaurants In Your Area</h1>
      <ul className= "results">
       {restaurants}
       </ul>
      </div>
      

      </div>
    )
}
});
