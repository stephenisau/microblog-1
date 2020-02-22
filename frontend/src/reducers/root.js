import posts from './posts';
import titles from './titles';
import modalReducer from './modal';
import { combineReducers } from "redux";

export default combineReducers({
  posts,
  titles,
  modalReducer
});