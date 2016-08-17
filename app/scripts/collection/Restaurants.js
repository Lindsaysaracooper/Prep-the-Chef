import Backbone from 'backbone';
import $ from 'jquery';
import restaurants from '../models/restaurants';
import settings from '../settings';


export default Backbone.Collection.extend({
  url: `https:/baas.kinvey.com/appdata/${settings.appId}/restaurants`,
  model: restaurants,

});
