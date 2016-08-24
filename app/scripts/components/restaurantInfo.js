import React from 'react';
import {Link} from 'react-router';
import MessageModal from './messageModal';
import store from '../store'
import liked from './search';

export default React.createClass({
  getInitialState: function(){
    return {
      messageModal: false,

    }
  },
  messageClickHandler:function(){
   this.setState({
     messageModal:true
   })
 },

 like:function(){
   store.session.toggleFavorite(this.props.restaurant._id);

   console.log('LIKED')
 },

 closeModal: function(){
   this.setState({
     messageModal:false
   });
 },

render:function (){
  // console.log(this.props.restaurant['Yelp Page'] )
  let liked = <i className="fa fa-heart-o heart" aria-hidden="true" onClick={this.like}></i>;
  if (this.props.liked) {liked= (<i className={"fa fa-heart heart"}
    aria-hidden="true"
    onClick={this.like}></i>)}
  let messageShow;
  if (this.state.messageModal) {
    messageShow = <MessageModal
    restaurant={this.props.restaurant}
    closeModal= {this.closeModal}  />;
  }
  return(

    <li>
      {this.props.restaurant.Name} <br></br>
    <span className="rating">  Rating: {this.props.restaurant.Rating} Stars</span>
      <img src={this.props.restaurant.Image}/>
      {liked}
       <a  target="_blank" href = {this.props.restaurant['Yelp Page']}><i className="fa fa-yelp yelpSpecific" aria-hidden="true"></i> </a>
      <button
      className ="messageButton"
      onClick= {this.messageClickHandler}>

       <i className="fa fa-envelope-o mail"
       aria-hidden="true"></i> Message the Chef</button>
       {messageShow}
    </li>
)
}
});
