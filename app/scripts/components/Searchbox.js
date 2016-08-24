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
      {value: 'Brazilian', label: 'Brazilian'},
      {value: 'Breakfast and Brunch', label: 'Breakfast and Brunch'},
      {value: 'Cafes', label: 'Cafes'},
      {value: 'Cajun', label: 'Cajun'},
      {value: 'French', label: 'French'},
      {value: 'Italian', label: 'Italian'},
      {value: 'Japanese', label: 'Japanese'},
      {value: 'Mexican', label: 'Mexican'},
      {value: 'Seafood', label: 'Seafood'},
      {value: 'Spanish', label: 'Spanish'},
      {value: 'Steakhouse', label: 'Steakhouse'},
      {value: 'Southern', label: 'Southern'},
      {value: 'Tapas', label: 'Tapas'},
      {value: 'Vegan', label: 'Vegan'},
      {value: 'Vegetarian', label: 'Vegetarian'},

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
