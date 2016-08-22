import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./nav";
import Footer from "./footer";
import Navtwo from './navtwo';

export default React.createClass({

render:function(){
return(
  <div className="wholeApp">
  <Navtwo/>
  {this.props.children}
  <Footer/>
  </div>
)


}



});
