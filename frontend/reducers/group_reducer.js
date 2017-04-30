import {RECEIVE_GROUPS} from '../actions/group_actions.js';
import merge from 'lodash/merge';

const _nullGroups = {};

const GroupReducer = (state = _nullGroups, action) => {
  Object.freeze(state);
  let newState = merge({},state);

  switch(action.type){

    case RECEIVE_GROUPS:
      newState = merge(newState, action.groups);
      return newState;

    default:
      return state;

  }
};

export default GroupReducer;
