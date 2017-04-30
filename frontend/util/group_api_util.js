export const requestGroups = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/groups',
    success: success,
    error: error
  })
};
