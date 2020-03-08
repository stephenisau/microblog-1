import { connect } from 'react-redux';
import Login from "../components/Login";

/**
 * Connects user login to login component
 */

 const mapStateToProps = (state, prevProps) => {
   return {
     user: state.user
   }
 }


 export default connect(
   mapStateToProps,
   null,
 )(Login);