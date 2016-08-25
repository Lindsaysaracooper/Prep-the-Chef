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
      restaurants:[],
      session: {}
    };

  },
  updateState:function(){
    this.setState({
      restaurants:store.restaurants.toJSON(),
      session:store.session.toJSON()
    });

  },
  componentDidMount:function(){
      store.restaurants.fetch();
    store.restaurants.on('update change', this.updateState);
    store.session.on('change', this.updateState)
  },
  componentWillUnmount:function(){
    store.restaurants.off('update change', this.updateState)
    store.session.off('change', this.updateState)

  },

  render: function (){

    let restaurants = this.state.restaurants.filter((restaurant,i,arr)=>{
      // console.log("restaurant.Cuisine ", restaurant)
        return restaurant.Cuisine.indexOf(this.props.location.query.term) !== -1;
      }).map((restaurant,i,arr)=>{
    let favArray= store.session.get('favorites').indexOf(restaurant._id)
    let liked = false;
      if (favArray !== -1){
      liked=true
    }
        return (
          <RestaurantInfo liked={liked} restaurant={restaurant} key={i}/>

        )

      })
let cuisine = this.props.location.query.term;
    // })//map to return  lis
    return(
      <div className="wholeSearch">
      <div className="searchResults">
      <section>
      <h1>{cuisine} Restaurants In Your Area</h1>
      <h2> Upcoming Reservation? Select the restaurant and message the chef your dietary needs</h2>
      </section>
      <ul className= "results">
       {restaurants}
       </ul>
      </div>


      </div>
    )
}
});
