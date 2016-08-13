import React from 'react';
import ReactDOM from 'react-dom';


export default React.createClass({
  render: function(){
  console.log("please show up");
    return(

      <div className="about">
        <h1>ABOUT</h1>
        <p>
          Enter some copy about the concept behind the restaurant.
        </p>
        <div className="testimonial1">
          <img id="chefPhoto" src="http://www.jazzmenrice.com/chefs/5/main-photo/Chef%20Mark%201%20FINAL.jpg" alt="Chef Photo" />
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          </p>
        </div>
        <div className="testimonial2">
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibus."
          </p>
          <img id = "customerPhoto" src="https://c1.staticflickr.com/5/4074/4894709118_d04583a76a_b.jpg" alt="Woman Eating" />
        </div>

      </div>
    )

  }
});
