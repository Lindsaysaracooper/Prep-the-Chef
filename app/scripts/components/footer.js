import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';


export default React.createClass({
render:function(){
  return(
<footer>
<p>
	Copyright &copy; 2016 Prep The Chef Inc. related marks are registered trademarks of Prep The Chef.
  <br></br><br></br>
    <i className="fa fa-facebook social" aria-hidden="true"></i>
    <i className="fa fa-instagram social" aria-hidden="true"></i>
    <i className="fa fa-pinterest-p social" aria-hidden="true"></i>
    <i className="fa fa-yelp social" aria-hidden="true"></i>
    </p>
</footer>
)
}
});
