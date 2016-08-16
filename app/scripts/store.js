import React from 'react';
import Session from './models/session';
import Restaurants from './collections/restaurants';


export default{
  session: new Session(),
  Restaurants: new Restaurants()
};
