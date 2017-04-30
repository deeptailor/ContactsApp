export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const fetchContacts = ({
  type: FETCH_CONTACTS
});

export const receiveContacts = (contacts) => ({
  type: RECEIVE_CONTACTS,
  contacts: contacts
});

export const createContact = (data) => ({
  type: CREATE_CONTACT,
  data: data
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  id: id
});
