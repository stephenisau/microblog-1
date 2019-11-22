import { connect } from 'react-redux';
import { addPost } from '../actionCreators';
import NewPostForm from '../NewPostForm';
import { withRouter } from "react-router";


function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps,
  { addPost },
  )(NewPostForm);