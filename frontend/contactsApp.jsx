import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from './components/root.jsx';

import configureStore from './store/store.js';
import { fetchContacts } from './actions/contact_actions.js';
import { fetchGroups } from './actions/group_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  var root = document.getElementById('root');
  var store = configureStore();

  window.store = store;
  window.fetchContacts = fetchContacts;
  window.fetchGroups = fetchGroups;

  ReactDOM.render(<RootComponent store={store}/>, root);
});
