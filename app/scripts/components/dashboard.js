import ReactDOM from 'react-dom';
import React from 'react';
import store from '../store';
import Restaurants from '../collection/Restaurants'

export default React.createClass({
getInitialState:function(){
  return{
    messages:[]
  };

},
updateState:function(){
  this.setState({messages:store.messages.toJSON()});
},
componentDidMount:function(){
  store.session.once('change:_id', function() {
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

  store.messages.on('update change', this.updateState);
},
componentWillUnmount:function(){
  store.messages.off('update change', this.updateState)
},

deleteButton: function(){
console.log(this.state)

},


  render:function (e){

    let messages = this.state.messages.map((message,i,arr)=>{
    // console.log(message)
    // console.log(message.restaurant, message.date);
        return (
          <li key={i}> You sent a message to {message.restaurant} for the reservation on {message.date}
          <input type="button" name="delete" value="DELETE"/>
          </li>
        )
      })

      return(
        <div className="dashboard">
        	<div className="userDashboard">
        		<h2>Your Account</h2>
        		<img src="x" alt="Your photo" />
        		<p>
        		</p>
        	</div>
        	<div className="messageCenter">
        		<h1>MESSAGE CENTER</h1>

        		<ul className="eachMessage">
        			 {messages}

        		</ul>
        	</div>
          </div>

      )
  }

});
