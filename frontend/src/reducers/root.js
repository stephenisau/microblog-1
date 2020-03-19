import posts from './posts';
import titles from './titles';
import modalReducer from './modal';
import user from './user';
import { combineReducers } from "redux";

export default combineReducers({
  posts,
  titles,
  user,
  modalReducer,
});