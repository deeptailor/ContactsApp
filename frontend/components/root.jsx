import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Navigation from './navigation/navigation.jsx';
import Splash from './splash/splash.jsx';
import Contacts from './contacts/contacts_container.js';
import Groups from './group/group_container.js';

const RootComponent= ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Navigation}>
        <IndexRoute component={Splash}></IndexRoute>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/groups' component={Groups}/>
      </Route>
    </Router>
  </Provider>
)

export default RootComponent;
