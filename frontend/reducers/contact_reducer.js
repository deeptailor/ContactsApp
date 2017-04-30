import {RECEIVE_CONTACTS} from '../actions/contact_actions.js';
import merge from 'lodash/merge';

const _nullContacts = {};

const ContactReducer = (state = _nullContacts, action) => {
  Object.freeze(state);
  let newState = merge({},state);

  switch(action.type){

    case RECEIVE_CONTACTS:
      newState = action.contacts;
      return newState;

    default:
      return state;

  }
};

export default ContactReducer;
