import { connect } from "react-redux";
import { getOnePostFromAPI, removePost, editPostFromAPI } from "../actions/actionCreators";
import PostDetail from "../PostDetail";

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

export default connect(
  mapStateToProps,
  { getOnePostFromAPI, removePost, editPostFromAPI }
)(PostDetail);