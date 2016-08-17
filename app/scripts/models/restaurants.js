import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults:
  {
    name:'',
    cuisine: '',
    imgUrl:'',
    rating:'',
    yelp: ''

  }
});
