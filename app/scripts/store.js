import React from 'react';
import Session from './models/session';
import Restaurants from './collection/Restaurants';


export default{
  session: new Session(),
  restaurants: new Restaurants()
};
