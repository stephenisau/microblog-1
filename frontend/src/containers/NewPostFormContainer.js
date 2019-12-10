import { connect } from 'react-redux';
import { addPostToAPI, editPostFromAPI } from '../actions/actionCreators';
import NewPostForm from '../components/NewPostForm';
import { withRouter } from "react-router";

export default connect(
  null,
  { addPostToAPI, editPostFromAPI },
  )(NewPostForm);