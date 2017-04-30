import { combineReducers } from 'redux';
import GroupReducer from './group_reducer.js';
import ContactReducer from './contact_reducer.js';

const RootReducer = combineReducers({
  groups: GroupReducer,
  contacts: ContactReducer
});

export default RootReducer;
