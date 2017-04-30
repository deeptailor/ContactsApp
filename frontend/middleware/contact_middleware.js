import { receiveContacts, FETCH_CONTACTS } from '../actions/contact_actions.js';
import { requestContacts } from '../util/contact_api_util.js';

const ContactMiddleware = ({getState, dispatch}) => (next) => (action) => {

  const receiveContactsSuccessCB = (contacts) => dispatch(receiveContacts(contacts));
  const receiveContactsErrorCB = (error) => console.lot(error);
  switch(action.type){

    case FETCH_CONTACTS:
      requestContacts(receiveContactsSuccessCB, receiveContactsErrorCB);
      return next(action);

    default:
      return next(action);
  }
}

export default ContactMiddleware;
