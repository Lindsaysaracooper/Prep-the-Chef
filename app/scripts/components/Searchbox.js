import React from 'react';
import Select from 'react-select';
import {hashHistory, Link} from 'react-router';
import store from '../store';


export default React.createClass({
  getInitialState: function() {
    return {authtoken: store.session.get('authtoken')}
  },
  updateState: function(){

    this.setState({authtoken: store.session.get('authtoken')});
  },
  componentDidMount: function (){
    store.session.on('change', this.updateState);
  },
  componentWillUnmount:function(){
    store.session.off('change',this.updateState)
  },

  searchChange: function(val){
    this.setState({selectedCuisine: val.value})
    hashHistory.push(`search/?term=${val.value}`);
    },

  render:function(){
    let cuisines =[
      {value: 'American', label: 'American'},
      {value: 'Italian', label: 'Italian'},
      {value: 'Mexican', label: 'Mexican'},
      {value: 'French', label: 'French'},
      {value: 'Spanish', label: 'Spanish'},
      {value: 'Tapas', label: 'Tapas'},
      {value: 'Vegetarian', label: 'Vegetarian'},
      {value: 'Vegan', label: 'Vegan'},
      {value: 'Japanese', label: 'Japanese'},
      {value: 'Steakhouse', label: 'Steakhouse'},
      {value: 'Dessert', label: 'Dessert'},
      {value: 'Seafood', label: 'Seafood'},
      {value: 'Cajun', label: 'Cajun'},
      {value: 'Breakfast & Brunch', label: 'Breakfast & Brunch'},
      {value: 'Bars', label: 'Bar Food'},
      {value: 'Southern', label: 'Southern'},
      {value: 'Brazilian', label: 'Brazilian'},
    ];


if(this.state.authtoken){
  return(
  <Select
  name="form-field-name"
  className="searchbox"
  value={this.state.selectedCuisine}
  placeholder='Select a Cuisine'
  options={cuisines}
  onChange={this.searchChange}
  ref="searchBox"
  />
)
}else{

return(
  <Link to = "/home/login"><h3 className="loginNote"> LOGIN/SIGNUP </h3></Link>
)
}
}
});
