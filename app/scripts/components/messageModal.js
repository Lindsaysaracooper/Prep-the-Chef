import React from 'react';
import {Router, Link, Route, hashHistory} from 'react-router';


export default React.createClass({
  render: function (){
    return(
      <div class="messageModal">
      	<h1>To </h1>
      	<p>
      		Please rememeber to include specific allergies, date and time of arrival. Messages sent the day of the reservation have a low chance of response.
      	</p>
      	<p id ="messageContentSpace">	</p>
      		<input class ="sendButton" type="button" name="send" value="SEND TO CHEF"/>
      		<input class ="backButton" type="button" name="back" value="BACK"/>
      </div>

    )
  }
});
