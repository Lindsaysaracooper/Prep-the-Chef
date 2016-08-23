import Backbone from 'backbone';

export default Backbone.Model.extend({
    idAttribute: '_id',
    
  defaults:
  {
    Name:'',
    Cuisine: '',
    Image:'',
    Rating:'',
    YelpPage: ''

  }
});
