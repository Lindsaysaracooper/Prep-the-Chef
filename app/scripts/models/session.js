import Backbone from 'backbone';
import login from '../components/login';
import store from '../store';
import $ from 'jquery';
import settings from '../settings';


export default Backbone.Model.extend({
  login:function(data){
    $.ajax({
      type:'POST',
      url: `https:/baas.kinvey.com/user/${settings.appId}/login`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success:(s) => {
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
        this.set({
          username: s.username,
          authtoken: s._kmd.authtoken,
          _id:s._id
        })
      },
        error:function(e){console.log(e);}
  })
},

});
