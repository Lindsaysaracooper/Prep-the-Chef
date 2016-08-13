import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';


export default React.createClass({
render:function(){
  return(
    <main>
    <header>
    <video id="video" loop muted autoPlay className="fullscreen-bg__video">
     <source src="assets/videos/cooking.mp4" type="video/mp4"/>
    </video>
			<h1>Prep the Chef</h1>
			<h2>Chat with the chef to prepare meals designed with you in mind.</h2>
			<h3>Currently in Austin Only</h3>
			<input id="restaurantSearchArea" type="text" name="search" placeholder="Search cuisine type"/>
			<input id ="findButton" type="button" name="searchbutton" value="FIND"/>
		</header>

<article className="howItWorks">
	<h1>How It Works</h1>
	<div className="howBox">
		<i className="fa fa-search" aria-hidden="true"></i>
		<p>
			Search and select participating restaurants.
		</p>
	</div>
		<i className="fa fa-arrow-right" aria-hidden="true"></i>
	<div className="howBox">
		<i className="fa fa-comment-o" aria-hidden="true"></i>
		<p>
			Message the chef directly with your dietary restrictions, date and time of arrival.
		</p>
	</div>
		<i className="fa fa-arrow-right" aria-hidden="true"></i>
	<div className="howBox">
		<i className="fa fa-cutlery" aria-hidden="true"></i>
		<p>
			Show up and enjoy a meal made for you.
		</p>
	</div>
</article>
<section className= 'examples'>
	<div className="exampleRestaurant">
  	<img src="https://s3-media4.fl.yelpcdn.com/bphoto/y1z1QreQxGJam_c7zndP_g/o.jpg" alt="photo of Steak and Shrimp" />
		<span className="restaurantNameExample">Eddie V's Steakhouse</span>
		<span className="cuisineTypeExample">Steakhouse</span>
		<span className="ratingExample">4.5</span>
	</div>
	<div className="exampleRestaurant">
		<img src="https://s3-media1.fl.yelpcdn.com/bphoto/RelD0dm0PZrUffKyCYDYnQ/o.jpg" alt="photo of frix chicken" />
		<span className="restaurantNameExample">Stella San Jac</span>
		<span className="cuisineTypeExample">Southern</span>
		<span className="ratingExample">4.5</span>
	</div>
	<div className="exampleRestaurant">
		<img src="https://s3-media2.fl.yelpcdn.com/bphoto/dhVGNygTwnGEcvBonoyIRg/o.jpg" alt="photo of restaurant" />
		<span className="restaurantNameExample">Eureka!</span>
		<span className="cuisineTypeExample">American</span>
		<span className="ratingExample">4</span>
	// </div>
	<div className="exampleRestaurant">
		<img src="https://s3-media1.fl.yelpcdn.com/bphoto/FYTFqON6ut5wNKc4vLhimw/o.jpg" alt="photo of brownie dessert" />
		<span className="restaurantNameExample">French Quarter Grille</span>
		<span className="cuisineTypeExample">Cajun</span>
		<span className="ratingExample">4.5</span>
	</div>

</section>
</main>
  )
}

});
