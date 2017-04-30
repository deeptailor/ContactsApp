export const requestContacts = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/contacts',
    success: success,
    error: error
  })
};
