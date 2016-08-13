import ReactDOM from 'react-dom';
import React from 'react';

export default React.createClass({
  render:function (e){
      return(
        <div class="dashboard">
        	<div class="userDashboard">
        		<h2>Your Account</h2>
        		<img src="x" alt="Your photo" />
        		<p>
        		</p>
        	</div>
        	<div class="messageCenter">
        		<h1>MESSAGE CENTER</h1>
        		there will be a lot of these
        		<div class="eachMessage">
        			<img src="#" alt="restaurantImage" />
        			<p>
        			</p>
        			<input type="button" name="delete" value="DELETE"/>
        		</div>
        	</div>
          </div>

      )
  }

});
