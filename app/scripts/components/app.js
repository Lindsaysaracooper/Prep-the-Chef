import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./nav";
import Footer from "./footer";
export default React.createClass({

render:function(){
return(
  <div className="wholeApp">
  <Nav/>
  {this.props.children}
  <Footer/>
  </div>
)


}



});
