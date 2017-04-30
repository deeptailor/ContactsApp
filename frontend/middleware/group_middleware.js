import { receiveGroups, FETCH_GROUPS } from '../actions/group_actions.js';
import { requestGroups } from '../util/group_api_util.js';

const GroupMiddleware = ({getState, dispatch}) => (next) => (action) => {

  const receiveGroupsSuccessCB = (groups) => dispatch(receiveGroups(groups));
  const receiveGroupsErrorCB = (error) => console.lot(error);
  switch(action.type){

    case FETCH_GROUPS:
      requestGroups(receiveGroupsSuccessCB, receiveGroupsErrorCB);
      return next(action);

    default:
      return next(action);
  }
}

export default GroupMiddleware;
