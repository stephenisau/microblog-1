import { OPEN_MODAL, CLOSE_MODAL } from './types';


export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}


export const toggleLogin = () => {
  return {
    // type: TOGGLE_LOGIN
  }
}