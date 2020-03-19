import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
  modalType: null,
  modalProps: {}
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modalReducer;