import React from 'react';
import Session from './models/session';
import Restaurants from './collection/Restaurants';
import Messages from './collection/Messages';


export default{
  session: new Session(),
  restaurants: new Restaurants(),
  messages: new Messages(),
};
