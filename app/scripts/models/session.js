import Backbone from 'backbone';
import login from '../components/login';
import store from '../store';
import $ from 'jquery';
import settings from '../settings';


export default Backbone.Model.extend({
  urlRoot: `https:/baas.kinvey.com/user/${settings.appId}/`,
  idAttribute: '_id',
  defaults:{
    favorites:[]
  },
  addFavorite:function(data){
    let oldFavorites=this.get('favorites');
    let newFavorites= oldFavorites.concat(data);
    this.set('favorites',newFavorites);
    this.save();
  },

  remove:function(data){
    $.ajax({
     type: 'DELETE',
     url: `https://baas.kinvey.com/appdata/${settings.appId}/favorites`,
     // data: JSON.stringify({username: username}),
     dataType: 'application/json',
     success: (response) => {
       console.log(response);
     },
     error: (err) => {
       console.log(err);
     }
 })
 },

  login:function(data){
    $.ajax({
      type:'POST',
      url: `https:/baas.kinvey.com/user/${settings.appId}/login`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success:(s) => {
        localStorage.authtoken= s._kmd.authtoken;
        this.set({
          username: s.username,
          authtoken: s._kmd.authtoken,
          _id:s._id
        })
      },
      error:function(e){console.log(e);}
    })
  },

  signup:function(data){
    // verify their passwords match
    $.ajax({
      type:'POST',
      url: `https:/baas.kinvey.com/user/${settings.appId}`,
      data: JSON.stringify({username:data.username, password: data.password}),
      contentType: 'application/json',
      success:(s) => {
          localStorage.authtoken= s._kmd.authtoken;
        this.set({
          username: s.username,
          authtoken: s._kmd.authtoken,
          _id:s._id

        })
      },
        error:function(e){console.log(e);}
  })
},

logout:function(data){
  // verify their passwords match
  $.ajax({
    type:'POST',
    url: `https:/baas.kinvey.com/user/${settings.appId}/_logout`,
    success:(s) => {
      this.clear();
      localStorage.removeItem('authtoken');

    },
      error:function(e){console.log(e);}
})
},

retrieve:function(data){
  this.fetch({
      url: `https:/baas.kinvey.com/user/${settings.appId}/_me`,
  })
}


// logout is a endpoint on kinvey
});
