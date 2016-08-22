import ReactDOM from 'react-dom';
import React from 'react';
import store from '../store';
import Restaurants from '../collection/Restaurants'
import ReactFilepicker from 'react-filepicker';
import settings from '../settings';

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
},
componentWillUnmount:function(){
  store.messages.off('update change', this.updateState)
},

deleteButton: function(){
console.log(this.props)

},

photoShow:function(files){
console.log(files)
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
      const options = {
  buttonText: 'Pick Me',
  buttonClass: 'filepicker',
  mimetype: 'image/*',
  container: 'window',
  services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
};
console.log(settings.api)

      return(
        <div className="dashboard">
        	<div className="userDashboard">
        		<h2>Your Account</h2>
            <img src= "assets/photos/pic.jpg"/>

            <input type="filepicker-dragdrop"
            data-fp-apikey="AhTgLagciQByzXpFGRI0Az"
            data-fp-mimetypes="image/*"
            data-fp-container="modal"
            data-fp-store-location="gcs" onChange={this.photoShow}/>

        		<p>
        		</p>
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


// <ReactFilepicker
// apikey={settings.api}
// onClick={console.log('WHY WONT YOU WORK')}
// onSuccess={this.photoShow}
// options={options}/>
