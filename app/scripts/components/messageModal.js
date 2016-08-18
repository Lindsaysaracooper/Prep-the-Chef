import React from 'react';
import {Router, Link, Route, hashHistory} from 'react-router';
import InputMoment from 'input-moment';
import moment from 'moment';
import store from '../store';
import sentMessage from './sentMessage';
import restaurants from './search';
import Restaurants from '../collection/Restaurants';
import { DateField, TransitionView, Calendar } from 'react-date-picker'
import RestaurantInfo from './restaurantInfo';


export default React.createClass({
  getInitialState:function() {
    return {
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
sendHandler:function(e){
  e.preventDefault();
  // console.log(this.refs)
  let data={
    beef:this.refs.beef.checked,
    corn:this.refs.corn.checked,
    dairy:this.refs.dairy.checked,
    fruit:this.refs.fruit.checked,
    fish:this.refs.fish.checked,
    gelatin:this.refs.gelatin.checked,
    gluten:this.refs.gluten.checked,
    goat:this.refs.goat.checked,
    peanuts:this.refs.peanuts.checked,
    seafood:this.refs.seafood.checked,
    shellfish:this.refs.shellfish.checked,
    spices:this.refs.spices.checked,
    soya:this.refs.soya.checked,
    treenut:this.refs.treenut.checked,
    vegetables:this.refs.vegetables.checked,
    vegetarian:this.refs.vegetarian.checked,
    date:this.refs.date.value,
    restaurant: this.props.restaurant.Name
  }
  store.messages.create(data,{
    success: function(){
  hashHistory.push('/sent');

    }


  })
},
  render: function (){
console.log(this.props)
        return (
      <div className="messageModal">
      	<h1>Dietary Restriction Form </h1>
        <h3> For {this.props.restaurant.Name}</h3>

        <form
        onSubmit={this.sendHandler}
        >
        <h3> I am a:
        <p></p>
        <label htmlFor= "vegan">Vegan </label>
        <input type="checkbox" name="restriction" ref="vegan" value="vegan" id="vegan"/>
        <label htmlFor= "vegetarian">Vegetarian</label>
        <input type="checkbox" name="restriction" ref="vegetarian" value="vegetarian" id="vegetarian"/>
        </h3>
        <h3> I am allergic to: </h3>
          <label htmlFor= "beef">Beef</label>
          <input type="checkbox" name="restriction" ref="beef" value="beef" id="beef"/>
          <label htmlFor= "corn">Corn</label>
          <input type="checkbox" name="restriction" ref="corn" value="corn"id="corn"/>
          <label htmlFor= "dairy">Dairy</label>
          <input type="checkbox" name="restriction" ref="dairy" value="dairy" id="dairy"/>
          <label htmlFor= "egg">Egg</label>
          <input type="checkbox" name="restriction" ref="egg" value="egg" id="egg"/>
          <label htmlFor= "fruit">Fruit</label>
          <input type="checkbox" name="restriction" ref="fruit" value="fruit" id="fruit"/>
          <label htmlFor= "fish">Fish</label>
          <input type="checkbox" name="restriction" ref="fish" value="fish" id="fish"/>
          <label htmlFor= "gelatin">Gelatin</label>
          <input type="checkbox" name="restriction" ref="gelatin" value="gelatin" id="gelatin"/>
          <label htmlFor= "gluten">Gluten</label>
          <input type="checkbox" name="restriction" ref="gluten" value="gluten" id="gluten"/>
          <p></p>
          <label htmlFor= "goat">Goat</label>
          <input type="checkbox" name="restriction" ref="goat" value="goat" id="goat"/>
          <label htmlFor= "peanuts">Peanuts</label>
          <input type="checkbox" name="restriction" ref="peanuts" value="peanuts" id="peanuts"/>
          <label htmlFor= "seafood">Seafood</label>
          <input type="checkbox" name="restriction" ref="seafood" value="seafood" id="seafood"/>
          <label htmlFor= "shellfish">Shellfish</label>
          <input type="checkbox" name="restriction" ref="shellfish" value="shellfish" id="shellfish"/>
          <label htmlFor= "spices">Spices</label>
          <input type="checkbox" name="restriction" ref="spices" value="spices" id="spices"/>
          <label htmlFor= "soya">Soya</label>
          <input type="checkbox" name="restriction" ref="soya" value="soya" id="soya"/>
          <label htmlFor= "treenut">Treenuts</label>
          <input type="checkbox" name="restriction" ref="treenut" value="treenut" id="treenut"/>

          <label htmlFor= "vegetables">Vegetables</label>
          <input type="checkbox" name="restriction" ref="vegetables" value="vegetables" id="vegetables"/>

          <br></br>
          <textarea className ="textarea" placeholder="Please enter specific allergy/dietary restrictions here."/>

          <h4> Select the date of your reservation:</h4>
          <input id="date"
          type="date"
          ref="date"
          />
          <p></p>
      		<input className ="sendButton"
          type="submit"
          name="submit"
          value="SEND TO CHEF"
          />
      		<button
          className="backButton"
          onClick={this.props.closeModal}
          >
          BACK</button>
          </form>
      </div>
    )
}
});
