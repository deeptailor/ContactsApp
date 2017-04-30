export const FETCH_GROUPS = 'FETCH_GROUPS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const CREATE_GROUP = 'CREATE_GROUP';
export const DELETE_GROUP= 'DELETE_GROUP';

export const fetchGroups = {
  type: FETCH_GROUPS
};

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups: groups
});

export const createGroup = (data) => ({
  type: CREATE_GROUP,
  data: data
});

export const deleteGroup = (id) => ({
  type: DELETE_GROUP,
  id: id
});
