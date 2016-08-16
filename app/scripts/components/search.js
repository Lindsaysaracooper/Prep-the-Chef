import React from 'react';
import {Link, hashHistory} from 'react-router';
import store from '../store';


export default React.createClass({
  getInitialState:function(){
    return{
      restaurants:[]
    }

  },

  updateState:function(){
    this.setState({restaurants:store.restaurants.toJSON()});
  },
  componentDidMount:function(){
    store.restaurants.on('update change', this.updateState);
  },
  componentWillUnmount:function(){
    store.searchBands.off('update change', this.updateState)
  },

});
