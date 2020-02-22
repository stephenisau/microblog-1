import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';


const modalReducer = (state = {}, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return;
    default:
      return stateCopy;
  }
}

export const modalReducer;