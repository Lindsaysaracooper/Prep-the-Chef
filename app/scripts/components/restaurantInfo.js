import React from 'react';
import {Link} from 'react-router';
import MessageModal from './messageModal';
import store from '../store'
import liked from './search';

export default React.createClass({
  getInitialState: function(){
    return {
      messageModal: false,
      like:false

    }
  },
  messageClickHandler:function(){
   this.setState({
     messageModal:true
   })
 },

 like:function(){
   this.setState({
     like:true
   })

   store.session.addFavorite(this.props.restaurant._id);

   console.log('LIKED')
 },

 closeModal: function(){
   this.setState({
     messageModal:false
   });
 },

render:function (){
  let favorited;
  if (this.state.like) {favorited= 'heart'}
  console.log(this.props.restaurant.Name)
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
      <i className="fa fa-heart heart"
      id={favorited}
      aria-hidden="true"
      onClick={this.like}></i>
      {liked}
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
