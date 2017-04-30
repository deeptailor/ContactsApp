import { applyMiddleware } from 'redux';
import ContactMiddleware from './contact_middleware.js';
import GroupMiddleware from './group_middleware.js';

const RootMiddleware = applyMiddleware(
  ContactMiddleware,
  GroupMiddleware
);

export default RootMiddleware;
