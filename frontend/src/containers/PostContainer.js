import { connect } from "react-redux";
import { getOnePostFromAPI, removePostFromAPI, editPostFromAPI, addCommentToAPI, removeCommentFromAPI } from "../actions/actionCreators";
import PostDetail from "../PostDetail";

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

export default connect(
  mapStateToProps,
  { getOnePostFromAPI, removePostFromAPI, editPostFromAPI, addCommentToAPI, removeCommentFromAPI }
)(PostDetail);