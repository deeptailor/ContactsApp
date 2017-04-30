export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';

export const fetchContacts = ({
  type: FETCH_CONTACTS
});

export const receiveContacts = (contacts) => ({
  type: RECEIVE_CONTACTS,
  contacts: contacts
});
