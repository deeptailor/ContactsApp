export const FETCH_GROUPS = 'FETCH_GROUPS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

export const fetchGroups = {
  type: FETCH_GROUPS
};

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups: groups
});
