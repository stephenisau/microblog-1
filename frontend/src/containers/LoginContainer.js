import { connect } from 'react-redux';
// import { openModal, closeModal } from '../actions/modal';
// import { getUserFromAPI, loginUser, registerUser } from '../actions/user';
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
    // login: () => dispatch(loginUser(props.user)),
    // register: ({ userInfo }) => dispatch(registerUser(props.user)),
    // fetchUser: () => dispatch(getUserFromAPI(props.user))
  }
}


export default connect(
  mapStateToProps,
  null,
)(Login);