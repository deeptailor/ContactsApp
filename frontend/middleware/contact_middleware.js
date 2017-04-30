import { receiveContacts, FETCH_CONTACTS, CREATE_CONTACT, DELETE_CONTACT } from '../actions/contact_actions.js';
import { requestContacts, addContact, deleteContactRequest } from '../util/contact_api_util.js';

const ContactMiddleware = ({getState, dispatch}) => (next) => (action) => {

  const receiveContactsSuccessCB = (contacts) => dispatch(receiveContacts(contacts));
  const receiveContactsErrorCB = (error) => console.log(error);
  switch(action.type){

    case FETCH_CONTACTS:
      requestContacts(receiveContactsSuccessCB, receiveContactsErrorCB);
      return next(action);

    case CREATE_CONTACT:
      addContact(action.data, receiveContactsSuccessCB, receiveContactsErrorCB);
      return next(action);

    case DELETE_CONTACT:
      deleteContactRequest(action.id, receiveContactsSuccessCB, receiveContactsErrorCB);
      return next(action);

    default:
      return next(action);
  }
}

export default ContactMiddleware;
