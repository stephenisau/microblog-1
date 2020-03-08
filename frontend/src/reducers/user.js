import { LOAD_USER, ADD_USER } from '../actions/types';

const INITIAL_STATE = {
  currUser: null,
  loading: false,
  errors: []
}

export default function rootReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOAD_USER:
      // load user information

    case ADD_USER:
      // add user to backend
    default:
      return state;
  }
}