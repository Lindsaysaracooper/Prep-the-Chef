import React from 'react';
import ReactDOM from 'react-dom';


export default React.createClass({
  render: function(){
    return(

      <div className="about">
      <div className="aboutHeader">
        <h1>Learn More</h1>
        <h2> Prep the Chef is the new ordering solution for those with severe allergies or dietary restrictions. We have partnered with local, high-end restuarants who would love to prepare food just for you. </h2>
        </div>
        <div className="aboutCopy">
        <h3> Did you know?</h3>
        <h2>
           Six in ten American adults (60 percent, a slight uptick from 57 percent in 2011) say they restrict at least one nutritional component from their diet.
        </h2>

        </div>
        <h1 id="testimonial"> Testimonials </h1>
        <div className="testimonial1">

          <img id="chefPhoto" src="assets/photos/chef.png"charset="utf-8" alt="Chef Photo" />

          <p className="quote1">
            "One of the hardest things in running a kitchen is getting a curve ball in the middle of a dinner rush. With Prep the Chef, I have more time to buy the necessary ingredients without risk of wasting of both time and money."
          </p>
        </div>
        <div className="testimonial2">

          <img id = "customerPhoto" src="https://c1.staticflickr.com/5/4074/4894709118_d04583a76a_b.jpg" alt="Woman Eating" />
          <p>
            Before Prep the Chef, my severe shellfish allergy prevented me from joining my friends to many restuarants. Now, I use Prep the Chef to alert the chef ahead of time and my special order is already lined up. It has made going out to eat so much less stressful.
          </p>
        </div>
      </div>
    )

  }
});
