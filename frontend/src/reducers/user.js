import { LOAD_USER } from '../actions/types';

const INITIAL_STATE = {
  currUser: null,
  loading: true,
  errors: []
}

export default function rootReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOAD_USER:
      // load user information

    default:
      return state;
  }
}