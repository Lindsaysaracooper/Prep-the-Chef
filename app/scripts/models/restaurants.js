import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults:
  {
    Name:'',
    Cuisine: '',
    Image:'',
    Rating:'',
    YelpPage: ''

  }
});
