import Backbone from 'backbone';
import $ from 'jquery';
import message from '../models/message';
import settings from '../settings';
import store from "../store";

export default Backbone.Collection.extend({
  url: `https:/baas.kinvey.com/appdata/${settings.appId}/messages`,
  model: message
});
