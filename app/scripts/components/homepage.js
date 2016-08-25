import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import Searchbox from './Searchbox';


export default React.createClass({
render:function(){
  return(
    <main>
    <video id="video" loop muted autoPlay className="fullscreen-bg__video">
     <source src="assets/videos/cooking.mp4" type="video/mp4"/>
    </video>
    <header>

			<h1>Prep the Chef</h1>
			<h2>chat with the chef to prepare meals designed with you in mind.</h2>
      <Searchbox />
      <h3>(currently in austin only)</h3>
		</header>

<article className="howItWorks">
	<h1 id="works">How It Works</h1>
	<div className="howBox">
		<i className="fa fa-search" id="icon" aria-hidden="true"></i>
		<p>
			Search and select participating restaurants.
		</p>
	</div>
		<i className="fa fa-arrow-right" id="right" aria-hidden="true"></i>
	<div className="howBox">
		<i className="fa fa-comment-o" id="icon" aria-hidden="true"></i>
		<p>
			Message the chef directly.
		</p>
	</div>
		<i className="fa fa-arrow-right" id="right" aria-hidden="true"></i>
	<div className="howBox">
		<i className="fa fa-cutlery" id="icon" aria-hidden="true"></i>
		<p>
			Show up and enjoy a meal made for you.
		</p>
	</div>
</article>
<div className= 'examples'>
  <h1> Some of our partners </h1>
  <a target="_blank" href ="https://www.yelp.com/biz/eddie-vs-prime-seafood-austin-6">
	<div className="exampleRestaurant">
  	<img src="https://s3-media4.fl.yelpcdn.com/bphoto/y1z1QreQxGJam_c7zndP_g/o.jpg" alt="photo of Steak and Shrimp" />
		<p className="restaurantNameExample">Eddie V's Steakhouse</p>
		<p className="cuisineTypeExample">Steakhouse | 4.5 Stars</p>
	   </div>
    </a>

  <a target="_blank" href="https://www.yelp.com/biz/stella-san-jac-austin-2">
	<div className="exampleRestaurant">
		<img src="https://s3-media1.fl.yelpcdn.com/bphoto/RelD0dm0PZrUffKyCYDYnQ/o.jpg" alt="photo of frix chicken" />
		<p className="restaurantNameExample">Stella San Jac</p>
		<p className="cuisineTypeExample">Southern | 4.5 Stars</p>
	</div>
      </a>
  <a target="_blank" href= "https://www.yelp.com/biz/eureka-austin">
	<div className="exampleRestaurant">
		<img src="https://s3-media2.fl.yelpcdn.com/bphoto/dhVGNygTwnGEcvBonoyIRg/o.jpg" alt="photo of restaurant" />
		<p className="restaurantNameExample">Eureka!</p>
		<p className="cuisineTypeExample">American | 4 Stars</p>
	   </div>
    </a>
	<a target="_blank"  href= "https://www.yelp.com/biz/eddie-vs-prime-seafood-austin-6">
    <div className="exampleRestaurant">
		<img src="https://s3-media1.fl.yelpcdn.com/bphoto/FYTFqON6ut5wNKc4vLhimw/o.jpg" alt="photo of brownie dessert" />
		<p className="restaurantNameExample">French Quarter Grille</p>
		<p className="cuisineTypeExample">Cajun | 4.5 Stars</p>
    </div>
    </a>

</div>
{this.props.children}
</main>
  )
}

});
