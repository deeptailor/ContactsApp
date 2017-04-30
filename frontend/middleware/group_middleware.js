import { receiveGroups, FETCH_GROUPS, CREATE_GROUP, DELETE_GROUP } from '../actions/group_actions.js';
import { requestGroups, createGroupRequest, deleteGroupRequest } from '../util/group_api_util.js';

const GroupMiddleware = ({getState, dispatch}) => (next) => (action) => {

  const receiveGroupsSuccessCB = (groups) => dispatch(receiveGroups(groups));
  const receiveGroupsErrorCB = (error) => console.log(error);
  switch(action.type){

    case FETCH_GROUPS:
      requestGroups(receiveGroupsSuccessCB, receiveGroupsErrorCB);
      return next(action);

    case CREATE_GROUP:
      createGroupRequest(action.data, receiveGroupsSuccessCB, receiveGroupsErrorCB);
      return next(action);

    case DELETE_GROUP:
      deleteGroupRequest(action.id, receiveGroupsSuccessCB, receiveGroupsErrorCB);
      return next(action);

    default:
      return next(action);
  }
}

export default GroupMiddleware;
