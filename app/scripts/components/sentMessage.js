import React from 'react';
import {Router, Link, Route, hashHistory} from 'react-router';


export default React.createClass({
  render:function(){
  return(
    <div className="sent">
    <h1> Your Message has been Sent! </h1>
    <h2> Your confirmation email from the chef shuld arrive in the next 24 hours. </h2>
    <p> Visit your <Link to = "/dashboard"> DASHBOARD </Link> </p>
    <p> or </p>
    <p> <Link to = "/home"> HOME </Link> </p>
    </div>
  )

}

});
