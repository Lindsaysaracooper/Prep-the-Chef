import ReactDOM from 'react-dom';
import React from 'react';
import store from '../store';
import Restaurants from '../collection/Restaurants'
import ReactFilepicker from 'react-filepicker';
import settings from '../settings';
import _ from 'underscore';

export default React.createClass({
getInitialState:function(){
  return{
    messages:[],
    favorites:[],
    restaurants:[]
  };

},
updateState:function(){
  this.setState({
    messages:store.messages.toJSON(),
    favorites:store.session.get('favorites'),
    restaurants:store.restaurants.toJSON()
  });

},
componentDidMount:function(){
  if(store.session.get('_id')){
    store.messages.fetch({
      data:{
        query:JSON.stringify({
          _acl:{
            creator: store.session.get('_id')
          }
        })
      }
    })
  }else{
  store.session.once('change:_id', function() {
    store.restaurants.fetch({
    })
    store.messages.fetch({
      data:{
        query:JSON.stringify({
          _acl:{
            creator: store.session.get('_id')
          }
        })
      }
    })
  })
}

  store.messages.on('update change', this.updateState);
  store.session.on('change', this.updateState);
  store.restaurants.on('update change', this.updateState);
},
componentWillUnmount:function(){
  store.messages.off('update change', this.updateState);
    store.session.off('change', this.updateState);
    store.restaurants.off('update change', this.updateState);
},

removeButton: function(e){
store.session.toggleFavorite(e.target.id)
},



  render:function (e){

    let messages = this.state.messages.map((message,i,arr)=>{
      let allergies = _.keys(message);
      let allergyList = allergies.filter((allergyItem,i,arr)=>{
        return message[allergyItem] === true;

        }).map((allergyItem,i,arr)=>{

        return(
          <p className="allergy">{allergyItem} </p>
        )
      })

      // console.log(_.keys(message))
        return (
          <li key={i}>
          <img src={store.restaurants.findWhere({Name:message.restaurant}).get('Image')}/>
          <p className="reservation"> Reservation date: {message.date}</p>
          <p className="to">To: {message.restaurant} </p>
          <p className="message"> "{message.textarea}"</p>
          <p className="diet">Dietary Restrictions: {allergyList}</p>


          </li>
        )
      })



let places=[];
let favorites = this.state.favorites.filter((favoriteId,i,arr)=>{
if (places.indexOf(favoriteId)=== -1){
  places.push(favoriteId);
  return true;

}else{
  return false;
}
}).map((favoriteId,i,arr)=>{
  if(store.restaurants.get(favoriteId)){
  let favoriteSpot = store.restaurants.get(favoriteId).toJSON();
// console.log(favoriteSpot.Image)
// console.log(store.restaurants.get(favoriteId)

// console.log(message.restaurant, message.date);
    return (
      <li key={i}><i className="fa fa-heart likey" aria-hidden="true"></i>  {favoriteSpot.Name}
      <input
      id={favoriteId}
      className="removeButton"
      type="button"
      name="delete"
      value="Remove"
      onClick={this.removeButton}/>
      </li>

    )
  }
  })

      return(
        <div className="dashboard">
        <div className="dashHeader">
        <h1>Your Dashboard</h1>
        <p> Messages, favorites, dietary restrictions conveniently located in one place.</p>
        </div>
        	<div className="userDashboard">
            <h2> YOUR FAVORITES</h2>
              {favorites}
        	</div>
        	<div className="messageCenter">
        		<h2>MESSAGE CENTER</h2>

        		<ul className="eachMessage">
        			 {messages}

        		</ul>
        	</div>
          </div>

      )
  }

});
