import { connect } from 'react-redux';
import { addPostToAPI, editPostFromAPI, getOnePostFromAPI } from '../actions/actionCreators';
import NewPostForm from '../components/NewPostForm';
import { withRouter } from "react-router";


function mapStateToProps(state) {
  return {
    post: state.post
  };
}


export default connect(
  null,
  { addPostToAPI, editPostFromAPI, getOnePostFromAPI },
  )(NewPostForm);