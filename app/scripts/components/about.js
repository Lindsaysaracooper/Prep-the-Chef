import React from 'react';
import ReactDOM from 'react-dom';


export default React.createClass({
  render: function(){
    return(

      <div className="about">
        <h1>About</h1>
        <h2>
          Do you have severe allergies? Vegan? Vegetarian?
        </h2>
        <h2>
          Do you have a hard time finding something on the menu that you can eat?
        </h2>
        <h3> Introducting <span> Prep the Chef </span> </h3>
        <div class="aboutCopy">
        <p> Prep the Chef is the new ordering solution for those with severe allergies. We have partnered with local, high-end restuarants who would love to prepare food just for you. </p>
        <p> In the past, guests with allergies have had a much more limited menu as Chefs' often only prepare the kitchen for the items featured on their traditional dishes. Now, kitchens have enough advanced notice to buy ingredients and prep recipes so talented chefs can prepare dishes fit for your dietary needs.  </p>

        <div className="testimonial">
          <img id="chefPhoto" src="http://www.jazzmenrice.com/chefs/5/main-photo/Chef%20Mark%201%20FINAL.jpg" alt="Chef Photo" />

          <p className="quote1">

            "One of the hardest things in running a kitchen is getting a curve ball in the middle of a dinner rush. While I don't mind having vegan guests, it does affect the flow of a kitchen who is used to preparing food in a certain way/time. With Prep the Chef, I have more time to buy the necessary ingredients without risk of wasting of both time and money."

          </p>
        </div>
        <div className="testimonial">
          <p>
            Before Prep the Chef, my severe shellfish allergy prevented me from joining my friends to many restuarants. I was sick of having to ask the kitchen to prepare me something special and I was often scared my allergy would get lost in translation from the server. Now, I use Prep the Chef to alert the chef ahead of time and my special order is already lined up. It has made going out to eat so much less stressful.
          </p>
          <img id = "customerPhoto" src="https://c1.staticflickr.com/5/4074/4894709118_d04583a76a_b.jpg" alt="Woman Eating" />
        </div>
        </div>
      </div>
    )

  }
});
