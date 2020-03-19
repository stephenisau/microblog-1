import { connect } from 'react-redux';
// import { openModal, closeModal } from '../actions/modal';
import { getUserFromAPI, login, register } from '../actions/user';
import Login from "../components/Login";

/**
 * Connects user login to login component
 */

const mapStateToProps = (state, prevProps) => {
  const { user } = state.user;
  return {
    user
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: () => dispatch(login(props.user)),
    register: () => dispatch(register(props.user)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);