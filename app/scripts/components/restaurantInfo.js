import React from 'react';
import {Link} from 'react-router';
import MessageModal from './messageModal';

export default React.createClass({
  getInitialState: function(){
    return {messageModal: false}
  },
  messageClickHandler:function(){
   this.setState({
     messageModal:true
   })
 },

 closeModal: function(){
   this.setState({
     messageModal:false
   });
 },

render:function (){
  console.log(this.props.restaurant.Name)
  let messageShow;
  if (this.state.messageModal) {
    messageShow = <MessageModal
    restaurant={this.props.restaurant}
    closeModal= {this.closeModal}
    />;
  }

  return(

    <li>
      {this.props.restaurant.Name} <br></br>
    <span className="rating">  Rating: {this.props.restaurant.Rating} Stars</span>
      <img src={this.props.restaurant.Image}/>
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
