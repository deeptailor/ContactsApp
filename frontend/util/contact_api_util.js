export const requestContacts = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/contacts',
    success: success,
    error: error
  })
};

export const addContact = (data, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/contacts',
    data: {contact: data},
    success: success,
    error: error
  })
};

export const deleteContactRequest = (id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `api/contacts/${id}`,
    success: success,
    error: error
  })
};
