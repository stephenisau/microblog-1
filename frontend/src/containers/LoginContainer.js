import { connect } from 'react-redux';
// import { openModal, closeModal } from '../actions/modal';
import { login, register } from '../actions/user';
import Login from '../components/Login/';

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
    registerUser: () => dispatch(register(props)),
    loginUser: () => dispatch(login(props.user)),
  }
}


export default connect(
  null,
  mapDispatchToProps,
)(Login);