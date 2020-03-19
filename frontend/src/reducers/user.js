import { LOAD_USER, ADD_USER, LOADED } from '../actions/types';

const INITIAL_STATE = {
  currUser: null,
  loading: false,
  errors: []
}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADED:
      return {
        currUser: action.payload.user,
        loading: false,
        errors: []
      }
    case LOAD_USER:
      return {
        currUser: { ...action.payload.user },
        loading: true,
        errors: [...action.payload.errors]
      }


    case ADD_USER:
    // add user to backend
    default:
      return state;
  }
}