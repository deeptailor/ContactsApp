export const requestGroups = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/groups',
    success: success,
    error: error
  })
};

export const createGroupRequest = (data, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/groups',
    data: {group: data},
    success: success,
    error: error
  });
};

export const deleteGroupRequest = (id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `api/groups/${id}`,
    success: success,
    error: error
  });
};
